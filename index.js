const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');


const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:What was the motivation? Why did you build this project? What problem does it solve? What did you learn?',
      name: 'description',
      
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
      
    },
    {
      type: 'input',
      message: 'What screenshots or videos are you adding?',
      name: 'usage',
      
    },
    {
      type: 'checkbox',
      message: 'What is your LinkedIn profile?',
      name: 'license'
      choices: ["GNU GPLv3","MIT License","Apache License 2.0","OpenBSD"],
      
    },
    {
      type: 'input',
      message: 'What is your LinkedIn profile?',
      name: 'contributing',
      
    },
    {
      type: 'input',
      message: 'What is your LinkedIn profile?',
      name: 'tests',
      
    },
    {
      type: 'input',
      message: 'What is your LinkedIn profile?',
      name: 'questions',
      
    },
  ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
