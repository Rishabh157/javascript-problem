// sort()  => The default sort() method converts the element types into strings
//            and then sorts them. The default sorting order is ascending. The sort() method changes the original array.

const countries = ["India", "America", "Poland", "Norway", "Scotland", "Argentina", "Brazil", "Mexico", "Caneda"]

countries.sort()
console.log(countries)


//  the sort methods accespts optional comprator function as an arguments. we can write a comprator function and pass to the sort 
//  method to override the default sorting behavior.

const number = [6,46,8473,7,1,4,9,0,6,2,200,42,5,5353,8867,5334]

number.sort()
console.log(number)  [ 2,  2, 2,  200, 42, 46, 5, 5334, 5353,  6, 6, 8867 ] 


// it happens because the default sort method convert elements to a string and then compares them based on the UTF-16 code in unit values

number.sort((a,b)=>{
    return a - b              // for descending we have to put (b-a)
})

console.log(number)
