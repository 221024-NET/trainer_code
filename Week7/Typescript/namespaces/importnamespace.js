var Primary;
(function (Primary) {
    var SecondaryNamespace = /** @class */ (function () {
        function SecondaryNamespace() {
        }
        SecondaryNamespace.prototype.isTrue = function (x) {
            if (x === "true") {
                return true;
            }
            return false;
        };
        return SecondaryNamespace;
    }());
    Primary.SecondaryNamespace = SecondaryNamespace;
})(Primary || (Primary = {}));
var sn = new Primary.SecondaryNamespace();
console.log(sn.isTrue("true"));
console.log(sn.isTrue("others"));
