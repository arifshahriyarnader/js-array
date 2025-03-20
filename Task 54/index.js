//Use Array.from to convert a string like "Hello" 
// into an array of characters.

function strToArray(str){
    return Array.from(str);
}

const charArray = strToArray("Hello");
console.log(charArray)