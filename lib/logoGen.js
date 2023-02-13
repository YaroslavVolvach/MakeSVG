const { writeFile } = require('fs');
const {ShapeFactory} = require('./shapes');


function logoGen(data) {
  

    let shape = new ShapeFactory(data.shapeColor, data.textColor, data.characters).getShape(data.shape)

    writeFile('./examples/logo.svg', shape.render(), ()=> console.log('Generated logo.svg in the examples folder!'));
}


module.exports = logoGen;

