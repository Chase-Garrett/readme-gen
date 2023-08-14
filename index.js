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
        type: "list",
        name: "license",
        message: "Choose a license for your project",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"]
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
