const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, install, usage, contributing, tests, license, github, email}) =>
`# ${title}

## Desciption
${description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Github](#github)
* [Email](#email)

## Installation
${install}

## Usage
${usage}

## License
![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)

## Contributing
${contributing}

## Tests
${tests}

## Questions?
If any questions contact at<br/>
Github: https://github.com/${github}<br/>
Email: ${email}

## Link to walkthrough video
https://drive.google.com/file/d/1AcrB7D4JSjF1eOrasNynZ308s8af7BFs/view
`

inquirer
.prompt([
    {
        type:'input',
        name:'title',
        message:'What is the title of your README?',
    },
    {
        type:'input',
        name:'description',
        message:'Write a description.',
    },
    {
        type:'input',
        name:'install',
        message:'Write about installation instructions.',
    },
    {
        type:'input',
        name:'usage',
        message:'Write about usage information.',
    },
    {
        type:'input',
        name:'contributing',
        message:'Write about contribution guidelines.',
    },
    {
        type:'input',
        name:'tests',
        message:'Write about test instructions.',
    },
    {
        type:'list',
        name:'license',
        message:'What License shall you chocie?',
        choices: ['ISC', 'PostgreSPL', 'MIT', 'Apache license 2.0', 'Artistic license 2.0', 'Microsoft Public License'],
    },
    {
        type:'input',
        name:'github',
        message:'What is you Github username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?',
    },
])
.then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
    );
})