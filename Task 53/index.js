//Create an array of n duplicate values using Array.from. 
// Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

function createDuplicateArray(value,n){
    return Array.from({length:n},() =>value);
}
const duplicateArray=createDuplicateArray("A",5);
console.log(duplicateArray);