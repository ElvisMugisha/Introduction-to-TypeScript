"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCirlce = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes ...  initially empty
let theShapes = [];
// add some shapes to the array
theShapes.push(myShape);
theShapes.push(myCirlce);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log("Shapes value " + tempShape.getInfo());
}
