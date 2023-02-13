const { Circle, Triangle, Square, ShapeFactory } = require('../lib/shapes');

const shapeColor = "black";
const textColor = "green";
const characters = "NAC";
const correctSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${shapeColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>`

describe("Circle", () => {
    it("should generate a svg file of a circle with specifications matching user input", () => {
        const correctCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        //     <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>`



        const makeCircle = () => new Circle(shapeColor, textColor, characters).render();

        expect(makeCircle()).toEqual(correctCircle);
    })
})


describe("Triangle", () => {
    it("should generate a svg file of a triangle with specifications matching user input", () => {
        const correctTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 290,200 10,200" style="fill:${shapeColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>`
        
        const makeTriangle = () => new Triangle(shapeColor, textColor, characters).render();

        expect(makeTriangle()).toEqual(correctTriangle);
    })
})


describe("Square", () => {
    it("should generate a svg file of a square with specifications matching user input", () => {

        const makeSquare = () => new Square(shapeColor, textColor, characters).render();

        expect(makeSquare()).toEqual(correctSquare);
    })
})

describe("ShapeFactory", () => {
    it("should generate a svg file of a correct shape with specifications matching user input", () => {

        const shape = new ShapeFactory(shapeColor, textColor, characters).getShape("square");
        const makeSquare = () => shape.render();

        expect(makeSquare()).toEqual(correctSquare);
    })
})
