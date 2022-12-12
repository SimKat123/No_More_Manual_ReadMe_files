// Packages
const inquirer = require("inquirer");
const fs = require("fs");

// Function to render license at the top of page
const renderLicenseBadge = (license)=> {
  if (license == "MIT") {
    return `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
  } else if (license == "APACHE 2.0") {
    return `![License](https://img.shields.io/badge/license-APACHE%202.0-blue.svg)`;
  } else if (license == "GPL 3.0") {
    return `![License](https://img.shields.io/badge/license-GPL%203.0-blue.svg)`;
  } else if (license == "BSD 3") {
    return `![License](https://img.shields.io/badge/license-BSD%203.0-blue.svg)`;
  } else if (license == "None") {
    return ``;
  };
};

// License line for ReadMe
const renderlicense = (license)=> {
  if (license == "MIT") {
    return `\n## License
This project is licensed under the ${license} license.\n`;
  } else if (license == "APACHE 2.0") {
    return `\n## License
This project is licensed under the ${license} license.\n`;
  } else if (license == "GPL 3.0") {
    return `\n## License
This project is licensed under the ${license} license.\n`;
  } else if (license == "BSD 3") {
    return `\n## License
This project is licensed under the ${license} license.\n`;
  } else if (license == "None") {
    return ``;
  };
}

// ReadMe file parameters and how it's look like
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
  ${renderLicenseBadge(license)}

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

${renderlicense(license)}
## Contributing
${contributions}

## Tests
To run tests, run the following command: ${run}
    
## Questions?
If you have any questions about this repo or project, feel free to open an issue ot contact me directly at my email ([${email}](${email})). Also, feel free to look at more of my work at [${username}](https://github.com/${username}).`;

// Questions for the Terminal and error messages if user leaves answers blank
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
      validate: (username) => {
        if (!username) {
          return "Please type in your GitHub username to include it in the ReadMe file";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (email) => {
        if (!email) {
          return "Please type in your email address to include it in the ReadMe file";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "projectName",
      message: "What is your project's name?",
      validate: (projectName) => {
        if (!projectName) {
          return "Please type in the title of your project to include it in the ReadMe file";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description for your project.",
      validate: (description) => {
        if (!description) {
          return "Please type in a description for your project to include it in the ReadMe file";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install dependencies?",
      default: "npm i",
    },
    {
      type: "input",
      name: "run",
      message: "What command should be run to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "warning",
      message: "What does the user need to know about this repo?",
      validate: (warning) => {
        if (!warning) {
          return "Please type in a couple sentences about what you would like the user to know about this Project";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "contributions",
      message:
        "What does the user need to know about contributions to this repo?",
      validate: (contributions) => {
        if (!contributions) {
          return "Please type how you would like the user to contribute to this project, if applicable";
        }
        return true;
      },
    },
  ])

  //FINALLY generate ReadMe with fs.writeFile. DON'T FORGET THE ERR PART!!
  .then((answers) => {
    const generateReadMe = createReadME(answers);
    fs.writeFile("ReadMe.md", generateReadMe, (err) =>
      err
        ? console.error(err)
        : console.log("Sucess! Your new ReadMe file has been created!")
    );
  });