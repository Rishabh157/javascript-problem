
// What will be the code output and why

(function () {
 var a = b = 3;
 console.log(a)
 console.log(b)
})();

// this is the shorthand statement var a = b = 3 actully is var b = 3 , var a = b
// it will  give us a value a = 3 & b = 3


// if we define use strict mode and it'll give error (b is not defined)
(function () {
 "use strict"
 var a = b = 3;
 console.log(a)
 console.log(b)
})();
