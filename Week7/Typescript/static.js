var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.prototype.calculateCircumference = function (radius) {
        return 2 * Circle.pi * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.pi);
console.log("Area of the circle is " + Circle.calculateArea(5));
var shape = new Circle();
console.log("Circumference of the circle is " + shape.calculateCircumference(5));
