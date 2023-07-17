import { Shape } from "./Shape";
import { Circle } from './Circle';
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log("This is for Shape : " + myShape.getInfo());

let myCirlce = new Circle(5, 10, 20);
console.log("This is for Circle : " + myCirlce.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log("This is for Rectangle : " + myRectangle.getInfo());
