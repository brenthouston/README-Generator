function generateLicenseBadge(license) {
    let licenseBadge = '';
  
    switch (license) {
      case 'GNU':
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
        case 'GNU':
            licenseLink = 'https://opensource.org/license/lgpl-2-0/';
            break;
          case 'MIT License':
            licenseLink = 'https://opensource.org/license/mit/';
            break;
          case 'Apache License 2.0':
            licenseLink = 'https://opensource.org/license/apache-2-0/';
            break;
          case 'Artistic License 2.0':
            licenseLink = 'https://opensource.org/license/artistic-license-2-0-php/';
            break;
          default:
            licenseLink = '';
        }
        return licenseLink;
  }

  function generateMarkdown(ans) {
    return `# ${ans.title}
![License](${generateLicenseBadge(ans.license)})    
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