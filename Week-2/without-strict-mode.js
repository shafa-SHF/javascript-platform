'use strict';

function test() {
    a = 10; //a becomes a global variable
}

test()
console.log(a);

/* lecture note: Why we need it ?
- safer by preventing accidental global variables
- cleaner by disalowing bad practices
- Predictable by avoiding ambigous behaviors
*/