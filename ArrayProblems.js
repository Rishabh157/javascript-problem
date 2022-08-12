const arr = [1,2,3,4,5]

// what is the output after delete the array indexes
delete arr[4]
delete arr[1]

console.log(arr)         //  [ 1, <1 empty item>, 3, 4, <1 empty item> ]
console.log(arr.length)  // 5

// Explanation : Deleting items from an array does not affect the length
//               of the array even delted item is the last items in the 
//               array the delete operation leaves an empty slot in the array                 
