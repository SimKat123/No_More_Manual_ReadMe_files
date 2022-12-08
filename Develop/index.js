// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// // TODO: Create a function to write README file
const createReadME = ({
  username,
  email,
  projectName,
  description,
  license,
  dependencies,
  run,
  warning,
  contributions,
}) =>
  `# ${projectName}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command: ${dependencies}

## Usage
${warning}

## License
This project is licensed under the ${license} license.

## Contributing
${contributions}

## Tests
To run tests, run the following command: ${run}
    
## Questions?
If you have any questions about this repo or project, feel free to open an issue ot contact me directly at my email ([${email}](${email})). Also, feel free to look at more of my work at [${username}](https://github.com/${username}).`;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "projectName",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description for your project.",
    },
    {
      type: "input",
      name: "license",
      message: "What kind of license should your project have?",
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "run",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "warning",
      message: "What does the user need to know about this repo?",
    },
    {
      type: "input",
      name: "contributions",
      message:
        "What does the user need to know about contributions to this repo?",
    },
  ])

  // // TODO: Create a function to initialize app
  .then((answers) => {
    const generateReadMe = createReadME(answers);
    fs.writeFile("ReadMe.md", generateReadMe, (err) =>
      err
        ? console.error(err)
        : console.log("Sucess! Your new ReadMe file has been created!")
    );
  });
// Error not showing when questions are not answered
// Dropdown menu for license?
// Badge shown at the top of the ReadME file
// Preprogramed answered for dependencies and run
// Also what is npm test?
// Link to email?
