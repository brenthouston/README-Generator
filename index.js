const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');




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
      message: 'What license do you wish to add?',
      name: 'license',
      choices: ["GNU","MIT License","Apache License 2.0","Artistic License 2.0"],
      
    },
    {
      type: 'input',
      message: 'How do you wish people to contribute?',
      name: 'contributing',
      
    },
    {
      type: 'input',
      message: 'What tests have you preformed?',
      name: 'tests',
      
    },
   
  ])
  .then(ans => {
        
        fs.writeFile('README.md', generateMarkdown.generateMarkdown(ans), (error)=>{
          if(error){
              throw error()
          }
          console.log('success')
        })
  })


