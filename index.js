// requires ther inclusion of the neccessary files to make the script function.
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");
//sets the var in global memory to be called later
let filename;

// todo WHEN I choose a license for my application from a list of options
// todo THEN a badge for that license is added near the top of the README

//launchers the question prompts using the inquirer npm
function handleInquirer() {
	inquirer //prompts the user for input to fill out the reame doc
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
				type: "list",
				name: "license",
				message: "What license would you like to use for this project?",
				choices: [
					" MIT",
					" GNU GPLv3",
					" ISC",
					" Apache License 2.0",
					" GNU GPLv2",
				],
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
		]) //
		.then((input) => {
			//generates the file name based on users chioce of project title, then passes user input to the markdown document.
			filename = `${input.title.toLowerCase().split(" ").join("")}_readme.md`;
			return genMarkdown(input);
		}) // applies output from markdown document to the writefile funtion
		.then((data) => {
			return generateReadme(data);
		}) // catchs and displays errors if reached
		.catch((err) => {
			console.log(err);
		});
}

//writes the data from the given sources to the new file name designated, calls an error if unsuccessful or notify the user by console if it was successful.
const generateReadme = (data) => {
	fs.writeFile(filename, data, function (err) {
		if (err) {
			return console.log("something's Not Right");
		}
		console.log("README created successfully!");
	});
};

//initializes the handleInquirer funtion when node index.js is run.
function init() {
	handleInquirer();
}

// Function call to initialize app
init();
