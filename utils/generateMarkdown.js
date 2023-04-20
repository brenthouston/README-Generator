function generateLicenseBadge(license) {
    let licenseBadge = '';
  
    switch (license) {
      case 'GNU GPLv3':
        licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
        break;
      case 'MIT License':
        licenseBadge= 'https://img.shields.io/badge/License-MIT-yellow.svg';
        break;
      case 'Apache License 2.0':
        licenseBadge= 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
        break;
      case 'OpenBSD':
        licenseBadge= 'https://img.shields.io/badge/License-OpenBSD-green.svg';
        break;
      default:
        licenseBadge= '';
    }
  

     return licenseBadge;
  }
  



  
  function renderLicenseLink(license) {
    let licenseLink ='';

    switch(license){
        case 'GNU GPLv3':
            licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
            break;
          case 'MIT License':
            licenseLink = 'https://choosealicense.com/licenses/mit/';
            break;
          case 'Apache License 2.0':
            licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0 ';
            break;
          case 'OpenBSD':
            licenseLink = 'https://www.openbsd.org/policy.html';
            break;
          default:
            licenseLink = '';
        }
  }

  function generateMarkdown(ans) {
    return `# ${ans.title}
${generateLicenseBadge(ans.license)}    
## Description
         ${ans.description}
## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
## Installation
  ${ans.installation}
    
## Usage
  ${ans.usage}
    
    
## License

[![License](${generateLicenseBadge(ans.license)})](${renderLicenseLink(ans.license)})
 
    
## Contributing
  ${ans.contributing}
    
    
## Tests
  ${ans.tests}
    
    
## Questions
   * [Email](mailto:brentjustinhouston@gmail.com)
   * [GitHub](https://github.com/brenthouston)`
  }
        
 
  module.exports = {
    generateMarkdown,
    renderLicenseLink,
    generateLicenseBadge
  

}