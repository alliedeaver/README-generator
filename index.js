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


// const writeToFile = (answers) => {
   
//     console.log(answers)
//     fs.writeFile('log.txt', process.argv[2], (err) =>
//         err ? console.error(err) : console.log('Success!')
//     );
// }



// TODO: Create a function to write README file

// const README = 
// function writeToFile(README, data) { }



// TODO: Create a function to initialize app
// function init() { }

const init = () => {
    inquirer.prompt(questions)
        .then((response) => console.log(response));
}



// Function call to initialize app
// const writeToFile = (answers) => {
//     console.log(answers)
//     fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
// } 
    
// init(questions, writeToFile);




// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );


// const responseHandler = (response) => (
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('')
//   );
  
 
  



//   fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
//   )