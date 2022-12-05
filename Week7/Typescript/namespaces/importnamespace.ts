namespace Primary {
    export class SecondaryNamespace implements PrimaryInterface {
        isTrue(x: string): Boolean {
            if(x === "true") {
                return true;
            }
            return false;
        }
    }
}

var sn = new Primary.SecondaryNamespace();
console.log(sn.isTrue("true"));
console.log(sn.isTrue("others"));
