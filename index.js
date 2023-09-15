// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },


    {
        type: 'input',
        message: 'Describe your project',
        name: 'Description',
    },


    {
        type: 'input',
        message: 'How did you install your project?',
        name: 'Installation',
    },


    {
        type: 'input',
        message: 'Usage Information',
        name: 'Usage',
    },


    {
        type: 'input',
        message: 'Who contributed in this project?',
        name: 'Contribution',
    },


    {
        type: 'input',
        message: 'Test instructions',
        name: 'tests',
    },


    {
        type: 'input',
        message: 'Which license did you use?',
        name: 'license',
    },


    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    }

];


// TODO: Create a function to write README file


const writeToFile = (filename, data) => {
    fs.writeFile(filename, data, (err) => {
        if(err) {
            return console.error(err);
        }
        console.log('Written to File!');
    })
};

    

// TODO: Create a function to initialize app
// function init() { }

const init = () => {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile('README.md', generateMarkdown(response));
        })
        .catch((error) => {
            console.error(error);
        });
};


init (); 


// Function call to initialize app

