// what is the output

var obj = {
 car: "BUGATI",
 price: "20000000$",
 func: function () {
  var present = this
  console.log("Outer Function present.car :", present.car, "present.price :", present.price);
  console.log("Outer Function this.car :", this.car, "this.price :", this.price);

  (function () {
   console.log("inner Function present.car :", present.car, "present.price :", present.price);
   console.log("inner Function this.car :", this.car, "this.price :", this.price);
  }())
 }
};

obj.func();


// outer function both this and present refers to obj so both can properly refer and access the car and the price
// but inner function this keyword in no longer refer to obj so result is undefined

/** OUTPUT **/

// Outer Function present.car : BUGATI present.price : 20000000$
// Outer Function this.car : BUGATI this.price : 20000000$
// inner Function present.car : BUGATI present.price : 20000000$
// inner Function this.car : undefined this.price : undefined 
