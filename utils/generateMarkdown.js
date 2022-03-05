//creates a link to an appropriate license badge for the project based on the user input
function renderLicenseBadge(data) {
	let licenseInput = data.license;
	const licenseType = licenseInput.split(" ").join("");

	if (!licenseType) {
		return "";
	} else {
		return `![badge](https://img.shields.io/badge/license-${licenseType}-green)`;
	}
}

//creates a link to the appropriate license document
function renderLicenseLink(data) {
	let licenseInput = data.license;
	switch (licenseInput) {
		case " MIT":
			return "https://choosealicense.com/licenses/mit/";
			break;
		case " GNU GPLv3":
			return "https://choosealicense.com/licenses/gpl-3.0/";
			break;
		case " ISC":
			return "https://choosealicense.com/licenses/isc/";
			break;
		case " Apache License 2.0":
			return "https://choosealicense.com/licenses/apache-2.0/";
			break;
		default:
			" No License Used";
			return "N/A";
			break;
	}
}

//main funtion that creates the format of the readme and inputs the data fro mthe user to fill out the sections.
function generateMarkdown(data) {
	return `# ${data.title}
${renderLicenseBadge(data)}

## Link:${data.projlink}
	
## Description 
${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation 
${data.install}
	
## Usage 
${data.usage}

## License 
This project is licensed under ${data.license}

For deatils visit ${renderLicenseLink(data)}

## How to Contribute 
${data.contribution}

## Tests
${data.test}

## Questions
Find an issue or have a question? Contact me via email ${data.email}. 
If you liked what you found, you can view more of my projects at: 
https://github.com/${data.github}.
`;
}

//exports the previous section's data to the index for use by the writefile function
module.exports = generateMarkdown;
