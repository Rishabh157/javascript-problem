
/*** Object.freeze ***/
// Object.freeze(obj) it prevents any changes to the object passed

const obj = {
 id: 1111,
 char: "Joker",
 actor: "Heath Ledger",
 movei: "Dark Night",
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
