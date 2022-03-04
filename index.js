// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");

let filename;

// TODO: Create an array of questions for user input

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
function handleInquirer() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "title",
				message: "What is the project's name?",
			},
			{
				type: "input",
				name: "projlink",
				message: "Please provide the project's link.",
			},

			{
				type: "input",
				name: "description",
				message: "Please describe the project.",
			},
			{
				type: "input",
				name: "install",
				message: "What are the installation instructions?",
			},
			{
				type: "input",
				name: "usage",
				message: "How does one use this project? What is the usage?",
			},
			{
				type: "input",
				name: "contribution",
				message: "Please write some contribution guidelines.",
			},
			{
				type: "input",
				name: "test",
				message: "Include any tests for users, or testing completed thus far.",
				default: "npm test",
			},
			{
				type: "checkbox",
				name: "license",
				message: "What license would you like to use for this project?",
				choices: ["MIT", "GNU GPLv3", "ISC", "Apache License 2.0", "GNU GPLv2"],
			},
			{
				type: "input",
				name: "github",
				message: "What is your GitHub user name?",
			},
			{
				type: "input",
				name: "email",
				message:
					"Which email would you like users to contact about this project?",
			},
		])
		.then((input) => {
			filename = `${input.title.toLowerCase().split(" ").join("")}_readme.md`;
			console.log(input.license);
			return genMarkdown(input);
		})
		.then((data) => {
			return generateReadme(data);
		})
		.catch((err) => {
			console.log(err);
		});
}

// creates the file named README.md and pulls data from question answers
// adds user answers to correct fields on the readme
// calls other funtions from other js file to fill in sections
// needs to parse user input for fields and insert the other document's items into the array.
// function writeToFile("ReadME.md", data) {}
const generateReadme = (data) => {
	// TODO: Create a function to write README file
	fs.writeFile(filename, data, function (err) {
		if (err) {
			return console.log("something's Not Right");
		}
		console.log("README created successfully!");
	});
};

// TODO: Create a function to initialize app
// itterate through questions using inquirer
// collect answers in some kind of object
// call write to file function
function init() {
	handleInquirer();
}

// Function call to initialize app
init();
