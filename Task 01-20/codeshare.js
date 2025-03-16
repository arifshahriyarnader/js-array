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