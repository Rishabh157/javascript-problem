//   splice()  =>  this methods help us to add, delete and update elements in an array. 
//                 the main purpose of the splice methods is to delete elements from array. 
//                 it return an array of the elements deleted and modifies the original array.


const countries = ["India", "America", "Poland", "Norway", "Scotland", "Argentina", "Brazil", "Mexico", "Caneda"]

const delItmesArr = countries.splice(1, 1)   // it delete the America at index 1
console.log(countries)


// to add an elements in an array. we need to pass the position where we want to add, how many elements to delete 
// starting with the position and the element to add.

countries.splice(1, 0, "UAE", "Qatar")    // it add the countries at the 1 index of an array and deleteCount is 0 so it will not remove any element
console.log(countries)




