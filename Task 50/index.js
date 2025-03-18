//Write a function that takes a variable number of arguments and converts 
// the arguments object into a real array using Array.from.

function convertsArgsToArray(...args){
    return Array.from(args);
}

const myArray =convertsArgsToArray(1,2,3, "Hello", true, {name:"Nader"})
console.log(myArray);