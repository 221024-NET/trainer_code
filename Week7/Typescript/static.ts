class Circle {
    static pi: number = 3.14;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }

    calculateCircumference(radius: number) {
        return 2 * Circle.pi * radius;
    }
}

console.log(Circle.pi);
console.log("Area of the circle is " + Circle.calculateArea(5));

var shape = new Circle();
console.log("Circumference of the circle is " + shape.calculateCircumference(5));
