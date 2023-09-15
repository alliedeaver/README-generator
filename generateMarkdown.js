// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLiceneBadge(license) {
    if (license) {
        return `![License Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
    } 
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}

function renderLcenseLink(license) {
    if (license) {
        return `[License Link](https://api.github.com/licenses${license})`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
\
function renderLicenseSection(license) {}


function renderLiceseSection(license) {
    if (license) {
        return `## License
        This project is licensed under the ${license} license. For more information please refer to the [License Link](https://opensource.org/licenses/${license})`;
    }
    return '';
}


// TODO: Create a function to generate markdown for README


function generateMarkdon(data) {
    return `# ${data.Title}

    ## Description
    ${data.Description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${data.Installation}

    ## Usage
    ${data.Usage}

    ${renderLicenseSection(data.license)}

    ## Contribution
    ${data.Contribution}

    ## Tests
    ${data.tests}

    ## Questions
    For any questions, feel free to reach out to me on [GitHub](https://github.com/${data.username})`;
}


module.exports = generateMarkdown;







