function value(num) {
    return num * 2;
}
function value2(val) {
    return val;
}
var val0 = value(6);
// let val1 = value("test");   // error.
var val2 = value2("test");
var val3 = value2(20);
function identity(arg) {
    return arg;
}
var o1 = identity("John");
console.log(o1);
var o2 = identity(33);
console.log(o2);
