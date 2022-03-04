// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
function handleInquirer() {
	// const questions = [];

	inquirer
		.prompt([
			{
				type: "input",
				name: "title",
				message: "What is the project's name?",
			},
			{
				type: "input",
				name: "description",
				message: "Please describe the project.",
			},
			{
				type: "input",
				name: "instal",
				message: "What are the installation instructions?",
			},
		])
		.then((data) => {
			return genMarkdown(data);
		})
		.then((response) => {
			generateReadme(response);
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
const generateReadme = (response) => {
	const filename = `${data.title.toLowerCase().split(" ").join("")}_readme.md`;
	// TODO: Create a function to write README file
	fs.writeFile(filename, response, function (err) {
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
