const fs = require("fs")

const path = require("path")

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give your project a description:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage"
    },
    {
        type: "input",
        message: "License",
        name: "license"
    },
    {
        type: "input",
        message: "Contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests",
        name: "tests"
    },
    {
        type: "input",
        message: "Email",
        name: "email"
    },
    {
        type: "input",
        message: "GitHub",
        name: "github"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=> {
        console.log(inquirerResponses);
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

// function call to initialize program
init();
