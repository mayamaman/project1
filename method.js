/*
//indexof
let text= 'hello world';
let result= text.indexOf('world');
console.log (result)

//trim
let text1= "   hey you!   ";
let resul1= text1.trim ();
console.log (resul1);

//includes
let text2= "hello world";
let resul2 = text2.includes ('hello');
console.log (resul2);

//replaceAll
let text3= "mango bannana and melon bannana and mango";
let resul3=  text3.replaceAll ( 'mango', 'appel');
console.log (resul3);

//pop
const animals= ['shark','zebra','snake','cat','dog'];
animals.pop ();
console.log (animals);

//shift
const animals1= ['shark','zebra','snake','cat','dog'];
animals1.shift();
console.log (animals1);

//unshift
const students= ['yael','noam','harel','shir','maya'];
students.unshift ('michael','matan');
console.log (students);

//slice
const food = ['mango','bannana','appel','lemon','orange'];
const food2 = food.slice (1,3);
console.log (food2);

//splice
const firstName= ['yael','noam','harel','shir','maya']
const firstName4= firstName.splice (1,3);
console.log (firstName4)

//join
const names = [' maya ',' matan ',' michael '];
const text4= names.join ('and');
console.log (text4)
  */









//where is the location of welcome (car-אותיות) (string- מילה)
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);  // 13

// remove spaces in string
let text1 = "       Hello World!        ";
let result1 = text1.trim();
console.log(result1); //hello word!


// check if the word included in the string
let text2 = "Hello world, welcome to the universe.";
let result2 = text2.includes("world");
console.log (result2) // true

let text3 = "Mr Blue has a blue house and a blue car";
let result3 = text3.replaceAll("blue", "red");
console.log (result3)

// Try other templates: Project -> New

//remove the last element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log (fruits); // "Banana", "Orange", "Apple"

// remove the first element
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.shift();
console.log (fruits1); //"Orange", "Apple", "Mango"

// adding a new element to the beginning of the array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.unshift("Lemon","Pineapple");
console.log (fruits2) //["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]

// adding a new element to end of the array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.push("Kiwi");
console.log(fruits3) // "Banana", "Orange", "Apple", "Mango", "Kiwi"]

// get element from location 1 to location 3 not included   this not change the original array 
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits4.slice(1, 3);
console.log (citrus)  // "Orange", "Lemon"

// return all item after location 1 
const citrus1 = fruits4.slice(1);
console.log (citrus)  //  "Orange", "Lemon", "Apple", "Mango"


// get element from location 1 to location 3 included   this  change the original array
const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus5 = fruits5.splice(1, 3);
console.log (splice -1 ,citrus5) //  "Orange", "Lemon", "Apple"


// change the array to string and add a char between items of array element
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
let text12 = fruits6.join("-");
console.log (text12) // Banana-Orange-Apple-Mango
























