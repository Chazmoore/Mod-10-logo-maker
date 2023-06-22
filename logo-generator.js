const inquirer = require('inquirer');
const { create } = require('svg-captcha');
const fs = require('fs');

// Export the function
module.exports = {
  generateLogo: () => {
    // Prompt the user for input
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter the text for your logo:',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Select a shape for your logo:',
          choices: ['circle', 'square', 'triangle'],
        },
        {
          type: 'input',
          name: 'color',
          message: 'Enter the color for your logo (hex value or name):',
        },
      ])
      .then((answers) => {
        // Generate the SVG logo
        const captcha = create({
          size: 4,
          ignoreChars: '0o1i',
          noise: 2,
          color: true,
          background: '#ffffff',
          width: 200,
          height: 80,
        });

        // Customize the SVG logo based on user input
        captcha.text = answers.text;
        captcha.options.width = 200;
        captcha.options.height = 80;
        captcha.options.fontSize = 50;
        captcha.options.charPreset = 'ABCDEFGHKLMNPRSTUVWXYZ0123456789';

        // Save the SVG file
        fs.writeFileSync('logo.svg', captcha.data);

        console.log('Logo generated successfully! Check the "logo.svg" file.');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  },
};
