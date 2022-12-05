export class MyClass {
    foo(str: string) {
        console.log(str);
    }
}

export class AnotherClass {
    foo(str: string) {
        console.log(str);
    }
   
}

class SomeClass {
    foo(str: string) {
        console.log(str);
    }   
}

export { SomeClass as MainClass };

