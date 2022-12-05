"use strict";
exports.__esModule = true;
exports.MainClass = exports.AnotherClass = exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.foo = function (str) {
        console.log(str);
    };
    return MyClass;
}());
exports.MyClass = MyClass;
var AnotherClass = /** @class */ (function () {
    function AnotherClass() {
    }
    AnotherClass.prototype.foo = function (str) {
        console.log(str);
    };
    return AnotherClass;
}());
exports.AnotherClass = AnotherClass;
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass.prototype.foo = function (str) {
        console.log(str);
    };
    return SomeClass;
}());
exports.MainClass = SomeClass;
