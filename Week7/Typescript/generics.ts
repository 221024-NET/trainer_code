function value(num: number) : number {
    return num * 2;
}

function value2(val: any) : any {
    return val;
}

let val0 = value(6);
// let val1 = value("test");   // error.
let val2 = value2("test");
let val3 = value2(20);

function identity<T>(arg: T): T {
    return arg;
}

var o1 = identity<string>("John");
console.log(o1);

var o2 = identity<number>(33);
console.log(o2);
