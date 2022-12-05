var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (num) {
            return num * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
// console.log(timesTwo(9));
var use = new Utility.Useful();
console.log(use.timesTwo(9));
