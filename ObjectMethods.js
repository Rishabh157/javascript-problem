/*** Object.freeze ***/
// Object.freeze(obj) it prevents any changes to the object passed

const obj = {
 id: 1111,
 char: "Joker",
 actor: "Heath Ledger",
 movie: "Dark Night",
 director: "Christhopher Nolan"
}

Object.freeze(obj)
obj.actor = "Christine bell"
console.log(obj)


/*** Object.keys ***/
// Object.keys(obj) returns an array containing all the keys of the object

console.log(Object.keys(obj))


/*** Object.values ***/
// Object.values(obj) returns an array containing all the values of the object

console.log(Object.values(obj))


/*** Object.entries ***/
// Object.entries(obj) returns both the key and its values in the form of nested array

console.log(Object.entries(obj))


/*** Object.seal() ***/
// Object.seal(obj) is similar to Object.freeze() but a seal object can only change/update
// the value of entry. you cannot add or delete the existing items

let newObj = Object.seal(obj)
obj.actor = "RDJ"             // it's update the value
obj.producer = "Emma Thomas"  // but can not add another key in this obj
console.log(obj)


/*** Object.assign ***/
// Object.assign(obj, objAssign) methods copies all the entries of source object
// to a target object. be careful with this one because it will not only return a
// copied object but it changes the target object as wll

let objAssign = {
 id: 2345,
 char: "IRON MAN",
 actor: "RDJ",
 movie: "Iron Man",
 director: "Jon Favreau"
}

let result = Object.assign(obj, objAssign)

console.log("COPIED OBJETC :", result)
console.log("TARGET OBJETC :", obj)
console.log("SOURCE OBJETC :", objAssign)
