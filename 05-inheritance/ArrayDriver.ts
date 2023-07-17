import { Shape } from "./Shape";
import { Circle } from './Circle';
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCirlce = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes ...  initially empty
let theShapes: Shape[] = [];

// add some shapes to the array
theShapes.push(myShape);
theShapes.push(myCirlce);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log("Shapes value " + tempShape.getInfo());
}
