// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const myJSON = JSON.stringify(inquirer);



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
    }

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



const responseHandler = (response) => (
    response.confirm === response.password
        ? console.log('Success!')
        : console.log('')
);





const writeToFile = (answers) => {
    console.log(answers)
    fs.writeFile('log.txt', process.argv[2], (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}
init(questions1, writeToFile);



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }



// TODO: Create a function to initialize app
function init() { }



// Function call to initialize app
init();


const init = (questionsArray, handlerFunction) => {
    inquirer
        .prompt(questionsArray)
        .then(handlerFunction)
}