const {prompt} = require('inquirer');
const logoGen = require('./lib/logoGen');
const questions = require('./lib/questions');


prompt(questions).then(logoGen);

