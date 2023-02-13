

class Shape {
    constructor(shapeColor, textColor, characters) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.characters = characters;
    }

    render() {
        return this.svg
    }
}


class Circle extends Shape {
    constructor(shapeColor, textColor, characters) {
        super(shapeColor, textColor, characters);
        this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        //     <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`;
    }

}


class Triangle extends Shape {
    constructor(shapeColor, textColor, characters) {
        super(shapeColor, textColor, characters);
        this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 290,200 10,200" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`;
    }
    
}


class Square extends Shape {
    constructor(shapeColor, textColor, characters) {
        super(shapeColor, textColor, characters);
        this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`;
    }

}

class ShapeFactory {
    constructor(shapeColor, textColor, characters){
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.characters = characters;
    }

    getShape(shape) {
        return new {
            triangle: Triangle, 
            circle: Circle, 
            square: Square
        }[shape](this.shapeColor, this.textColor, this.characters)
    }
}


module.exports = {Circle, Triangle, Square, ShapeFactory}
