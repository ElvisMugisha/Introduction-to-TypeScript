"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
console.log("This is for Shape : " + myShape.getInfo());
let myCirlce = new Circle_1.Circle(5, 10, 20);
console.log("This is for Circle : " + myCirlce.getInfo());
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
console.log("This is for Rectangle : " + myRectangle.getInfo());