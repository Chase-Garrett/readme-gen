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
function renderLicenseLink(license) {
  let licenseLink = "";
  switch (license) {
    case "Academic Free License v3.0":
      licenseLink = "https://opensource.org/licenses/AFL-3.0";
      break;
    case "Apache license 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Artistic license 2.0":
      licenseLink ="";
      break;
    case "Boost Software License 1.0":
      licenseLink ="";
      break;
    case "BSD 2-clause license":
      licenseLink ="";
      break;
    case "BSD 3-clause license":
      licenseLink ="";
      break;
    case "BSD 3-clause Clear license":
      licenseLink ="";
      break;
    case "Creative Commons license family":
      licenseLink ="";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink ="";
      break;
    case "Creative Commons Attribution 4.0":
      licenseLink ="";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      licenseLink ="";
      break;
    case "Do What The F*ck You Want To Public License":
      licenseLink ="";
      break;
    case "Educational Community License v2.0":
      licenseLink ="";
      break;
    case "Eclipse Public License 1.0":
      licenseLink ="";
      break;
    case "Eclipse Public License 2.0":
      licenseLink ="";
      break;
    case "European Union Public License 1.1":
      licenseLink ="";
      break;
    case "GNU Affero General Public License v3.0":
      licenseLink ="";
      break;
    case "GNU General Public License family":
      licenseLink ="";
      break;
    case "GNU General Public License v2.0":
      licenseLink ="";
      break;
    case "GNU General Public License v3.0":
      licenseLink ="";
      break;
    case "GNU Lesser General Public License family":
      licenseLink ="";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseLink ="";
      break;
    case "GNU Lesser General Public License v3.0":
      licenseLink ="";
      break;
    case "ISC":
      licenseLink ="";
      break;
    case "LaTeX Project Public License v1.3c":
      licenseLink ="";
      break;
    case "Microsoft Public License":
      licenseLink ="";
      break;
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "";
      break;
    case "Open Software License 3.0":
      licenseLink = "";
      break;
    case "PostgreSQL License":
      licenseLink = "";
      break;
    case "SIL Open Font License 1.1":
      licenseLink = "";
      break;
    case "University of Illinois/NCSA Open Source License":
      licenseLink = "";
      break;
    case "The Unlicense":
      licenseLink = "";
      break;
    case "zLib License":
      licenseLink = "";
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  switch (license) {
    case "Academic Free License v3.0":
      licenseSection = "This project is licensed under the Academic Free License v3.0 license.";
      break;
    case "Apache license 2.0":
      licenseSection = "This project is licensed under the Apache license 2.0 license.";
      break;
    case "Artistic license 2.0":
      licenseSection ="This project is licensed under the Artistic license 2.0 license.";
      break;
    case "Boost Software License 1.0":
      licenseSection ="This project is licensed under the Boost Software License 1.0 license.";
      break;
    case "BSD 2-clause license":
      licenseSection ="This project is licensed under the BSD 2-clause license license.";
      break;
    case "BSD 3-clause license":
      licenseSection ="This project is licensed under the BSD 3-clause license license.";
      break;
    case "BSD 3-clause Clear license":
      licenseSection ="This project is licensed under the BSD 3-clause Clear license license.";
      break;
    case "Creative Commons license family":
      licenseSection ="This project is licensed under the Creative Commons license family license.";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseSection ="This project is licensed under the Creative Commons Zero v1.0 Universal license.";
      break;
    case "Creative Commons Attribution 4.0":
      licenseSection ="This project is licensed under the Creative Commons Attribution 4.0 license.";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      licenseSection ="This project is licensed under the Creative Commons Attribution Share Alike 4.0 license.";
      break;
    case "Do What The F*ck You Want To Public License":
      licenseSection ="This project is licensed under the Do What The F*ck You Want To Public License license.";
      break;
    case "Educational Community License v2.0":
      licenseSection ="This project is licensed under the Educational Community License v2.0 license.";
      break;
    case "Eclipse Public License 1.0":
      licenseSection ="This project is licensed under the Eclipse Public License 1.0 license.";
      break;
    case "Eclipse Public License 2.0":
      licenseSection ="This project is licensed under the Eclipse Public License 2.0 license.";
      break;
    case "European Union Public License 1.1":
      licenseSection ="This project is licensed under the European Union Public License 1.1 license.";
      break;
    case "GNU Affero General Public License v3.0":
      licenseSection ="This project is licensed under the GNU Affero General Public License v3.0 license.";
      break;
    case "GNU General Public License family":
      licenseSection ="This project is licensed under the GNU General Public License family license.";
      break;
    case "GNU General Public License v2.0":
      licenseSection ="This project is licensed under the GNU General Public License v2.0 license.";
      break;
    case "GNU General Public License v3.0":
      licenseSection ="This project is licensed under the GNU General Public License v3.0 license.";
      break;
    case "GNU Lesser General Public License family":
      licenseSection ="This project is licensed under the GNU Lesser General Public License family license.";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseSection ="This project is licensed under the GNU Lesser General Public License v2.1 license.";
      break;
    case "GNU Lesser General Public License v3.0":
      licenseSection ="This project is licensed under the GNU Lesser General Public License v3.0 license.";
      break;
    case "ISC":
      licenseSection ="This project is licensed under the ISC license.";
      break;
    case "LaTeX Project Public License v1.3c":
      licenseSection ="This project is licensed under the LaTeX Project Public License v1.3c license.";
      break;
    case "Microsoft Public License":
      licenseSection ="This project is licensed under the Microsoft Public License license.";
      break;
    case "MIT":
      licenseSection = "This project is licensed under the MIT license.";
      break;
    case "Mozilla Public License 2.0":
      licenseSection = "This project is licensed under the Mozilla Public License 2.0 license.";
      break;
    case "Open Software License 3.0":
      licenseSection = "This project is licensed under the Open Software License 3.0 license.";
      break;
    case "PostgreSQL License":
      licenseSection = "This project is licensed under the PostgreSQL License license.";
      break;
    case "SIL Open Font License 1.1":
      licenseSection = "This project is licensed under the SIL Open Font License 1.1 license.";
      break;
    case "University of Illinois/NCSA Open Source License":
      licenseSection = "This project is licensed under the University of Illinois/NCSA Open Source License license.";
      break;
    case "The Unlicense":
      licenseSection = "This project is licensed under the The Unlicense license.";
      break;
    case "zLib License":
      licenseSection = "This project is licensed under the zLib License.";
      break;
    default:
      licenseSection = "";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
