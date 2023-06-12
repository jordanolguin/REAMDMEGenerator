// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter your project title",
    name: "title",
  },
  {
    type: "input",
    message: "What was your motivation?",
    name: "motivation",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "why",
  },
  {
    type: "input",
    message: "What problem does it solve?",
    name: "solution",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "learned",
  },
  {
    type: "input",
    message: "What are the steps reqiured to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Please provide instructions and examples for use. Include screenshots as needed",
    name: "instructions",
  },
  {
    type: "input",
    message:
      "Please list your collaborators, if any, with links to their GitHub profiles",
    name: "collaborators",
  },
  {
    type: "input",
    message: "Please list any third-party assets that require attribution",
    name: "assets",
  },
  {
    type: "input",
    message: "Please enter your project tests",
    name: "tests",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license",
    choices: ["BSD", "MIT", "GNU GLP", "Apache License 2.0", "ISC"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log(error);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const template = markdown(answers);
    writeToFile("README.md", template);
  });
}

// Function call to initialize app
init();
