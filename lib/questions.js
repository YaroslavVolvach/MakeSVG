const questions = [

    {
        type: 'input',
        name: 'characters',
        message: 'Enter up to 3 characters for your logo.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color by keyword or hexadecimal number (hex code must start with #).'
    },
    {
        type: 'list',
        name: 'shape',
        message: "Pick a shape from the list.",
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color by keyword or hexadecimal number (hex code must start with #).'
    },
]

module.exports = questions;