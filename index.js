const inquirer = require('inquirer');
const fs = require('fs');

const { square, circle, triangle } = require("./Lib/shapes");

console.log(process.cwd());

function writeFile(fileName, answers) {
  const svgString = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <g>
        ${getShapeSvgString(answers.shape, answers.color, answers.text, answers.textColor)}
      </g>
    </svg>
  `;
  

  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

function getShapeSvgString(shape, color, text, textColor) {
  let shapeSvgString = '';

  if (shape === "triangle") {
    shapeSvgString = `
      <polygon points="150,18 244,182 56,182" fill="${color}" />
      <text x="150" y="130" text-anchor="middle" font-size="40" fill="${textColor}">
        ${text}
      </text>
    `;
  } else if (shape === "square") {
    shapeSvgString = `
      <rect x="40" y="40" width="160" height="160" fill="${color}" />
      <text x="120" y="130" text-anchor="middle" font-size="40" fill="${textColor}">
        ${text}
      </text>
    `;
  } else {
    shapeSvgString = `
      <circle cx="150" cy="100" r="80" fill="${color}" />
      <text x="150" y="110" text-anchor="middle" font-size="40" fill="${textColor}">
        ${text}
      </text>
    `;
  }

  return shapeSvgString;
}

function promptUser() {
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
        message: 'Enter the color for your logo shape (hex value or name):',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color for your logo text (hex value or name):',
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Value can't be longer than 3 characters");
        promptUser();
      } else {
        writeFile("logo.svg", answers);
      }
    });
}

promptUser();





   





