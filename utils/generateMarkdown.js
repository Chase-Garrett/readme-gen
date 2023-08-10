// TODO: fill in links for license badges
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch (license) {
    case "Academic Free License v3.0":
      licenseBadge = "[![License: AFL 3.0](https://img.shields.io/badge/License-AFL%203.0-blue.svg)](https://opensource.org/licenses/AFL-3.0)";
      break;
    case "Apache license 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Artistic license 2.0":
      licenseBadge ="";
      break;
    case "Boost Software License 1.0":
      licenseBadge ="";
      break;
    case "BSD 2-clause license":
      licenseBadge ="";
      break;
    case "BSD 3-clause license":
      licenseBadge ="";
      break;
    case "BSD 3-clause Clear license":
      licenseBadge ="";
      break;
    case "Creative Commons license family":
      licenseBadge ="";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge ="";
      break;
    case "Creative Commons Attribution 4.0":
      licenseBadge ="";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      licenseBadge ="";
      break;
    case "Do What The F*ck You Want To Public License":
      licenseBadge ="";
      break;
    case "Educational Community License v2.0":
      licenseBadge ="";
      break;
    case "Eclipse Public License 1.0":
      licenseBadge ="";
      break;
    case "Eclipse Public License 2.0":
      licenseBadge ="";
      break;
    case "European Union Public License 1.1":
      licenseBadge ="";
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge ="";
      break;
    case "GNU General Public License family":
      licenseBadge ="";
      break;
    case "GNU General Public License v2.0":
      licenseBadge ="";
      break;
    case "GNU General Public License v3.0":
      licenseBadge ="";
      break;
    case "GNU Lesser General Public License family":
      licenseBadge ="";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseBadge ="";
      break;
    case "GNU Lesser General Public License v3.0":
      licenseBadge ="";
      break;
    case "ISC":
      licenseBadge ="";
      break;
    case "LaTeX Project Public License v1.3c":
      licenseBadge ="";
      break;
    case "Microsoft Public License":
      licenseBadge ="";
      break;
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "";
      break;
    case "Open Software License 3.0":
      licenseBadge = "";
      break;
    case "PostgreSQL License":
      licenseBadge = "";
      break;
    case "SIL Open Font License 1.1":
      licenseBadge = "";
      break;
    case "University of Illinois/NCSA Open Source License":
      licenseBadge = "";
      break;
    case "The Unlicense":
      licenseBadge = "";
      break;
    case "zLib License":
      licenseBadge = "";
      break;
    default:
      licenseBadge = "";
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
