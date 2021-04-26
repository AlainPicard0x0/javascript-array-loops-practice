//Arrays /////////////////////////////////////////////////////////////////////////////////////////////////////////


//Create one empty Array and one Array with a list of car names
let emptyArray = [];
let cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];


//Print both arrays
//console.log(emptyArray, cars);


//Print the length of the Array
//console.log(cars.length);


//Access an element in a given position
//Arrays are zero-indexed which means the first element is at position 0
// console.log(cars[8]);
// console.log(cars[10]);


//Exercise : How would you access "Cadillac" 
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
//console.log(cars[3]);


//Change an element in an Array
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars[4] = "Nissan";
// console.log(cars);


//Exercise : Change the element Ford to Tesla
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars[6] = "Tesla";
// console.log(cars);


//Add an element to the end of an Array
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.push("Volvo");
// console.log(cars);


//Add an element to the beginning of an Array
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.unshift("Pontiac");
// console.log(cars);


//Remove an element from the beginning of an Array
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.shift();
// console.log(cars);


//Remove the last element of an Array
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.pop();
// console.log(cars);


//Remove an element in an Array at a specific index (modify the original)
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.splice(4, 3);
// console.log(cars);


//Insert an element into an Array at a given index using the .splice() method
// cars.splice(2,0,"new car");
// console.log(cars);


//Exercise : Remove "Cadillac" from the cars Array using the .splice() method
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.splice(3,1);
// console.log(cars);


//Exercise : Remove "Toyota" from the cars Array using the .splice() method
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.splice(9,2);
// console.log(cars);


//Exercise : Remove "Chevrolet, Dodge, and Ford" from the cars Array using the .splice() method
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.splice(1,1);
//console.log(cars);


//Exercise : Remove "Audi and BMW" from the cars Array using the .splice() method
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// cars.splice(cars.length-1, 1);
// console.log(cars);


//Find if an Array contains a certain element using the .includes() method. Returns true or false
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// console.log(cars.includes("Honda"));
// console.log(cars.includes("Nissan"));


//Find if an Array contains a certain element using the .indexOf() method. Returns the index number or -1
//cars = ["Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Dodge", "Ford", "Honda", "Mercedes", "Toyota"];
// console.log(cars.indexOf("Mercedes"));
// console.log(cars.indexOf("Nissan"));



//  Loops & Iterators   ************************************************************************************* */

let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);


//Loop over an array using a for loop
//arr = [1,2,3,4,5,6,7,8,9,10];
//Loop forwards
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//Loop backwards
// for(let i = arr.length; i >= 0; i--) {
//     console.log(arr[i]);
// }


//For loops have different uses other than iterating over an Array.
//Print Hello to the console 5 times
// for(let i = 0; i < 5; i++) {
//     console.log("Hello");
// }


//Print numbers 0 through 5 to the console using a for loop
// for(let i = 0; i < 6; i++) {
//     console.log(i);
// }


//Print elements in an Array using a forEach() method
//arr = [1,2,3,4,5,6,7,8,9,10];
//arr.forEach(element => console.log(element));


//Print each element of an Array using a for of statement
//arr = [1,2,3,4,5,6,7,8,9,10];
// for(let x of arr) {
//     console.log(x);
// }


//Continue adding 10 until you reach 100 using a while loop
// let result = 0;
// while(result < 100) {
//     result = result + 10;
//     console.log(result);
// }


//Print Hello as long as the value of the variable result is less than 5 using a while loop
// let result = 0;
// while(result < 5) {
//     console.log("Hello");
//     result++;
// }


//What if the value of result is already more than 5
// let result = 6;
// while(result < 5) {
//     console.log("Hello");
//     result++;
// }


//To ensure that your code is run at least once you can use a do...while statement
// let result = 6;
// do {
//     console.log("Hello");
//     result++
// } while(result < 5);


//Print Hello 5 times using a do...while statement
// let i = 0;
// do {
//     console.log("Hello");
//     i++
// } while(i < 5);


//Nested loops
// for(let i = 1; i <= 5; i++) {
//     for(let j = 10; j <= 15; j++) {
//         console.log("i = " + i + " j = " + j);
//     }
// }












