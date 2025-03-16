//Task 1:Create an array of 5 elements using the Array Constructor.
const newArray=new Array(20,25,30,35,40)
console.log(newArray)

//Task 2: Create an array of 3 empty slots
const emptyArray=new Array(3)
console.log(emptyArray)

//Task 3: Create an array of 6 elements using the Array literals and access the fourth element 
// in the array using its length property.
const sixElements=[10,15,20,25,30,35]
const fourthElements=sixElements[sixElements.length-3]
console.log(fourthElements);

//Task 4: Use the for loop on the above array to print elements in the odd index.
const loopElements=[10,15,20,25,30,35];
for(let i=1; i<loopElements.length; i+=2){
    console.log(loopElements[i])
}

//Task 5: Add one element at the front and the end of an array.
const addOneElement=[4,5]
addOneElement.unshift(3);
addOneElement.push(6)
console.log(addOneElement)

//Task 6: Remove an element from the front and the end of an array.
const removeElement=[12,13,14,18]
removeElement.shift()
removeElement.pop()
console.log(removeElement)

//Task 7: Create an array containing the name of your favourite foods(10 foods).
//  Destructure the 6th food element from the array using destructuring.
const favouriteFood=["Burger", "Pizza", "Sandwich", "French Fries","Chicken Chowmin", "Noodles", "Grill", "Sharma", "Chaap", "Peri Peri"]
const [,,,,,sixthElement] =favouriteFood;
console.log(sixthElement)
//Task 8:  Take out the last 8 food items from the above array using the Array destructuring. 
// Hint: rest parameter.
const [,, ...rest]=favouriteFood
console.log(rest)

//Task 9: Clone an Array(Shallow cloning)
const salad=["Tomato", "Orion", "Spice","Curret","Salt"]
//const saladCopy=salad.slice()
const saladCopy=[...salad]
console.log(saladCopy)

//Task 10: Empty an array using its length property
const emptyArr=[12,34,56,78,90];
emptyArr.length=0;
console.log(emptyArr)

//Task 11: Create an array of 10 elements(number 1 to 10). 
// Resize the array to length 6 once you find the number 5 in that array. 
// Hint: Use for-loop.
let numberArray=[1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<numberArray.length;i++){
    if(numberArray[i] === 5){
        numberArray.length=6;
        break;
    } 
}
console.log(numberArray)

//Task 12: Create an Array of 10 elements. Use the splice() method to empty the array.
const empArr=[1,2,3,4,5,6,7,8,9,10]
emptyArr.splice(0,empArr.length)
console.log(emptyArr)

//Task 13: Create an Array of 10 elements. You can empty the array in multiple ways: 
// using the length property, using the pop() method, 
// using the shift() method, setting the array with [], 
// or the splice() method. Which among these methods are most efficient and why?
const arrElements=[1,2,3,4,5,6,7,8,9,10]
//arrElements.length=0;
// while(arrElements.length>0){
//     arrElements.pop()
// }
// while(arrElements.length>0){
//     arrElements.shift()
// }
arrElements.splice(0, arrElements.length)
console.log(arrElements);

//arrElements.length is most efficient method an dfastest method it's directly modifies array lengrth

//Task 14: What happens when you concatenate two empty arrays?
const list1=[]
const list2=[]
const merged=list1.concat(list2);
console.log(merged)

// Task 15: How can you check if a value is partially
//  matching with any of the elements of an Array?
const checkArray=["apple","banana","mango","orange","grapes"]
const check=checkArray.some((item) =>{
    return item.includes("an");
})
console.log(check);

//Task 16: What is the difference between the slice() and splice() methods?
//The slice method returns the selected elements in an array as a new array object.
// The splice method changes the contents of an array by removing or replcaing existing elements
//  and/or adding new elements in place.
//slice() method does not change the original array, it returns a new array.
//splice() method changes the original array.

//slice example
const fruits=['apple','banana','mango','orange','grapes'];
const fruitsSliced=fruits.slice(1,3);
console.log(fruitsSliced); //Output: [ 'banana', 'mango' ]
console.log(fruits); //Original array remains unchanged: [ 'apple', 'banana', 'mango', 'orange', 'grapes' ]

//splice example
const products=['laptop','mouse','keyboard','monitor','printer'];
const productsSpliced=products.splice(1,2,'headphones','webcam');
console.log(productsSpliced); //Output: [ 'mouse', 'keyboard]
console.log(products); //Original array is changed: [ 'laptop', 'headphones', 'webcam', 'monitor', 'printer' ]


//Task -17: Create an Array of alphanumeric strings. 
// Sort the elements in both ascending and descending orders. 
// You must be doing this in an immutable way such that the source array
//  never gets modified.

const alphanumericArray = ["a1b2", "c3d4", "e5f6","i9j0", "g7h8"];
const ascendingOrder=[...alphanumericArray].sort();
console.log("Ascending Order:",ascendingOrder)

const descendingOrder=[...alphanumericArray].sort().reverse()
console.log("Desceding Order:",descendingOrder)

//Task 18: Can you give examples of sparse and dense arrays?
//Sparse Array: An array in which the elements are not contiguous.
const sparseArray=[1, ,3, ,5]
console.log(sparseArray)

//Task 19: Give a practical usages of the .fill() method
const fruitsList=["Apple","Banana","Mango","Orange","Grapes"]
fruitsList.fill("Fruit")
console.log(fruitsList)

//Task 20: How to convert an array to a string?
const arrayToString=["Apple","Banana","Mango","Orange","Grapes"]
const stringArray=arrayToString.join()
console.log(stringArray)