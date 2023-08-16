// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions",
        default: "N/A"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information",
        default: "N/A"
    },
    {
        type: "input",
        name: "credits",
        message: "Enter credits and/or contributions",
        default: "N/A"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions",
        default: "N/A"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project",
        choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0",
        "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "BSD 3-clause clear license",
        "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0",
        "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License",
        "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0",
        "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family",
        "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family",
        "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC",
        "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0",
        "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License",
        "The Unlicense", "zLib License"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
