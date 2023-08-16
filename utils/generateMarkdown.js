// If there is no license, return an empty string
// otherwise, return the license badge
function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch (license) {
    case "Academic Free License v3.0":
      licenseBadge = "[![License: AFL 3.0](https://img.shields.io/badge/License-AFL%203.0-blue.svg)](https://opensource.org/licenses/AFL-3.0)";
      break;
    case "Apache license 2.0":
      licenseBadge = "[![License: Apache license 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Artistic license 2.0":
      licenseBadge ="[![License: Artistic 2.0](https://img.shields.io/badge/License-Artistic%202.0-blue.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "Boost Software License 1.0":
      licenseBadge ="[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 2-clause license":
      licenseBadge ="[![License: BSD 2-clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 3-clause license":
      licenseBadge ="[![License: BSD 3-clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 3-clause Clear license":
      licenseBadge ="[![License: BSD 3-clause Clear](https://img.shields.io/badge/License-BSD%203--Clause--Clear-blue.svg)](https://opensource.org/licenses/BSD-3-Clause-Clear)";
      break;
    case "Creative Commons license family":
      licenseBadge ="[![License: Creative Commons license family](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge ="[![License: Creative Commons Zero v1.0 Universal](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Creative Commons Attribution 4.0":
      licenseBadge ="[![License: Creative Commons Attribution 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      licenseBadge ="[![License: Creative Commons Attribution Share Alike 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)";
      break;
    case "Do What The F*ck You Want To Public License":
      licenseBadge ="[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](https://wtfpl.net)";
      break;
    case "Educational Community License v2.0":
      licenseBadge ="[![License: ECL 2.0](https://img.shields.io/badge/License-ECL%202.0-blue.svg)](https://opensource.org/licenses/ECL-2.0)";
      break;
    case "Eclipse Public License 1.0":
      licenseBadge ="[![License: Eclipse Public License 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "Eclipse Public License 2.0":
      licenseBadge ="[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
      break;
    case "European Union Public License 1.1":
      licenseBadge ="[![License: EUPL 1.1](https://img.shields.io/badge/License-EUPL%201.1-blue.svg)](https://opensource.org/licenses/EUPL-1.1)";
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge ="[![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU General Public License family":
      licenseBadge ="[![License: GNU General Public License family](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/)";
      break;
    case "GNU General Public License v2.0":
      licenseBadge ="[![License: GNU GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU General Public License v3.0":
      licenseBadge ="[![License: GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU Lesser General Public License family":
      licenseBadge ="[![License: GNU Lesser General Public License family](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/)";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseBadge ="[![License: GNU LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)";
      break;
    case "GNU Lesser General Public License v3.0":
      licenseBadge ="[![License: GNU LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "ISC":
      licenseBadge ="[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "LaTeX Project Public License v1.3c":
      licenseBadge ="[![License: LPPL v1.3c](https://img.shields.io/badge/License-LPPL%20v1.3c-blue.svg)](https://www.latex-project.org/lppl.txt)";
      break;
    case "Microsoft Public License":
      licenseBadge ="[![License: Microsoft Public License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Open Software License 3.0":
      licenseBadge = "[![License: Open Software License 3.0](https://img.shields.io/badge/License-OSL%203.0-blue.svg)](https://opensource.org/licenses/OSL-3.0)";
      break;
    case "PostgreSQL License":
      licenseBadge = "[![License: PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-blue.svg)](https://opensource.org/licenses/PostgreSQL)";
      break;
    case "SIL Open Font License 1.1":
      licenseBadge = "[![License: SIL](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      break;
    case "University of Illinois/NCSA Open Source License":
      licenseBadge = "[![License: University of Illinois/NCSA](https://img.shields.io/badge/License-NCSA-blue.svg)](https://opensource.org/licenses/NCSA)";
      break;
    case "The Unlicense":
      licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "zLib License":
      licenseBadge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      break;
    default:
      licenseBadge = "";
  }

  return licenseBadge;
}

// If there is no license, return an empty string
// otherwise, return the license link
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
      licenseLink ="https://opensource.org/licenses/Artistic-2.0";
      break;
    case "Boost Software License 1.0":
      licenseLink ="https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD 2-clause license":
      licenseLink ="https://opensource.org/licenses/BSD-2-Clause";
      break;
    case "BSD 3-clause license":
      licenseLink ="https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSD 3-clause Clear license":
      licenseLink ="https://opensource.org/licenses/BSD-3-Clause-Clear";
      break;
    case "Creative Commons license family":
      licenseLink ="https://creativecommons.org/share-your-work/licensing-types/";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink ="http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Creative Commons Attribution 4.0":
      licenseLink ="https://creativecommons.org/licenses/by/4.0/";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      licenseLink ="https://creativecommons.org/licenses/by-sa/4.0/";
      break;
    case "Do What The F*ck You Want To Public License":
      licenseLink ="http://www.wtfpl.net/about/";
      break;
    case "Educational Community License v2.0":
      licenseLink ="https://opensource.org/licenses/ECL-2.0";
      break;
    case "Eclipse Public License 1.0":
      licenseLink ="https://opensource.org/licenses/EPL-1.0";
      break;
    case "Eclipse Public License 2.0":
      licenseLink ="https://opensource.org/licenses/EPL-2.0";
      break;
    case "European Union Public License 1.1":
      licenseLink ="https://opensource.org/licenses/EUPL-1.1";
      break;
    case "GNU Affero General Public License v3.0":
      licenseLink ="https://opensource.org/licenses/AGPL-3.0";
      break;
    case "GNU General Public License family":
      licenseLink ="https://www.gnu.org/licenses/gpl.html";
      break;
    case "GNU General Public License v2.0":
      licenseLink ="https://opensource.org/licenses/GPL-2.0";
      break;
    case "GNU General Public License v3.0":
      licenseLink ="https://opensource.org/licenses/GPL-3.0";
      break;
    case "GNU Lesser General Public License family":
      licenseLink ="https://www.gnu.org/licenses/lgpl.html";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseLink ="https://opensource.org/licenses/LGPL-2.1";
      break;
    case "GNU Lesser General Public License v3.0":
      licenseLink ="https://opensource.org/licenses/LGPL-3.0";
      break;
    case "ISC":
      licenseLink ="https://opensource.org/licenses/ISC";
      break;
    case "LaTeX Project Public License v1.3c":
      licenseLink ="https://opensource.org/licenses/LPPL-1.3c";
      break;
    case "Microsoft Public License":
      licenseLink ="https://opensource.org/licenses/MS-PL";
      break;
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Open Software License 3.0":
      licenseLink = "https://opensource.org/licenses/OSL-3.0";
      break;
    case "PostgreSQL License":
      licenseLink = "https://opensource.org/licenses/PostgreSQL";
      break;
    case "SIL Open Font License 1.1":
      licenseLink = "https://opensource.org/licenses/OFL-1.1";
      break;
    case "University of Illinois/NCSA Open Source License":
      licenseLink = "https://opensource.org/licenses/UoI-NCSA";
      break;
    case "The Unlicense":
      licenseLink = "https://opensource.org/licenses/Unlicense";
      break;
    case "zLib License":
      licenseLink = "https://opensource.org/licenses/Zlib";
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;
}

// If there is no license, return an empty string
// otherwise return the license section with a description of the license
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
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[Tests](#tests)
  -[License](#license)
  -[Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Tests
  ${data.tests}
  ## License
  ${renderLicenseSection(data.license)}
  ## Questions
  If you have any questions, please contact me at ${data.email}. You can also visit my [GitHub](${data.github}) for more of my work.
`;
}

module.exports = generateMarkdown;
