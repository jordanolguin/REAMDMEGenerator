// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  motivation,
  why,
  solution,
  learned,
  installation,
  instructions,
  collaborators,
  assets,
  tests,
  license,
}) {
  return `# ${title}

  ${motivation} ${why} ${solution} ${learned}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${installation}
  
  ## Usage

  ${instructions}
  
  ## Credits

  ${collaborators}
  ${assets}
  
  ## Contributing
  
  Pull requests are welcome. For major changes, please open an issue first
  to discuss what you would like to change.
  
  Please make sure to update tests as appropriate.
  
  Please open an issue to discuss any questions you may have.
  
  ## Tests

  ${tests}
  
  ## License
  
  ${license}`;
}

module.exports = generateMarkdown;
