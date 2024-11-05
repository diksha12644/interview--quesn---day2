// // // // // // // // // // /// 1 What are objects in javascript?

// // // // // // // // // // //  Objects are collections of key-value pairs. They are one of the fundamental data types in JavaScript and allow you to store, manipulate, and organize data. Objects are often used to represent real-world entities or structures, such as users, settings, or configurations, with properties and behaviors.

// // // // // // // // // // // Creating an Object in JavaScript
// // // // // // // // // // // You can create an object using:

// // // // // // // // // // // 1). Object Literal Notation
// // // // // // // // // // // 2). Constructor Function
// // // // // // // // // // // 3). Class Syntax (ES6+)


// // // // // // // // // // // examples 
// // // // // // // // // // const person = {
// // // // // // // // // //     name: "Alice",
// // // // // // // // // //     age: 25,
// // // // // // // // // //     occupation: "Software Developer",
// // // // // // // // // //     greet: function() {
// // // // // // // // // //       console.log("Hello, my name is " + this.name);
// // // // // // // // // //     }
// // // // // // // // // //   };
  
 
// // // // // // // // // //   console.log(person.name); 
// // // // // // // // // //   console.log(person.age); 
// // // // // // // // // //   person.greet(); 
  



// // // // // // // // // //2).   // A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output
// // // // // // // // // // Basic Syntax of a Function
// // // // // // // // // // Functions can be define way 

// // // // // // // // // // 1).Function Declaration
// // // // // // // // // // 2).Function Expression
// // // // // // // // // // 3).Arrow Function

// // // // // // // // // // 1. Function Declaration
// // // // // // // // // // The most common way to define a function is using a function declaration.

// // // // // // // // // function greet(name) {
// // // // // // // // //   console.log("Hello, " + name + "!");
// // // // // // // // // }
// // // // // // // // // greet("Alice"); 


// // // // // // // // // // 2. Function Expression
// // // // // // // // // // A function expression involves assigning a function to a variable. This is helpful when you want to create functions conditionally or pass them as arguments to other functions.

// // // // // // // // // examples:
// // // // // // // // // const add = function(x, y) {
// // // // // // // // //   return x + y;
// // // // // // // // // };

// // // // // // // // // console.log(add(3, 5)); 

// // // // // // // // // 3. Arrow Function use:
// // // // // // // // // Arrow functions are a shorter syntax introduced in ES6. They’re especially useful for simple functions and in situations where you want to maintain the context (this) of the surrounding code.

// // // // // // // // // examples:
// // // // // // // // // const multiply = (a, b) => a * b;

// // // // // // // // // console.log(multiply(4, 5)); 



// // // // // // // // //.....................................................3.....................................................

// // // // // // // // // What is an event loop and call stack. in js

// // // // // // // // The call stack is a data structure that keeps track of function calls in JavaScript. Whenever a function is invoked, it’s added to the stack, and when it completes, it’s removed from the stack. 

// // // // // // // // examples:

// // // // // // // // function multiply(a, b) {
// // // // // // // //     return a * b;
// // // // // // // //   }
  
// // // // // // // //   function square(n) {
// // // // // // // //     return multiply(n, n);
// // // // // // // //   }
  
// // // // // // // //   function printSquare(x) {
// // // // // // // //     const result = square(x);
// // // // // // // //     console.log(result);
// // // // // // // //   }
  
// // // // // // // //   printSquare(4);
  


// // // // // // // 2. The Event Loop
// // // // // // // The event loop is a mechanism that allows JavaScript to handle asynchronous events and tasks (e.g., callbacks, promises) in a non-blocking way, even though it runs in a single thread. The event loop monitors the call stack and the callback queue (also known as the task queue).



// // // // // // // Example
// // // // // // // console.log("Start");

// // // // // // // setTimeout(() => {
// // // // // // //   console.log("Inside setTimeout");
// // // // // // // }, 1000);

// // // // // // // console.log("End");

// // // // // // //.............................................4.........................................................

// // // // // // // What is the DOM?

// // // // // // The Document Object Model is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.



// // // // // //...............................................5...........................................

// // // // // // 1. undefined
// // // // // undefined is a JavaScript data type and value. It indicates that a variable has been declared but has not been assigned any value.


// // // // // Example:


// // // // // let x;
// // // // // console.log(x); 

// // // // // function myFunction() {}
// // // // // console.log(myFunction()); 

// // // // // const obj = { name: "diksha" };
// // // // // console.log(obj.age);



// // // // // 2). not defined
// // // // // not defined refers to a ReferenceError in JavaScript, meaning that a variable or object is being used without being declared.

// // // // // Example:

// // // // // console.log(y); 


// // // // 3). NaN (Not-a-Number)
// // // // NaN stands for "Not-a-Number" and is a value that represents an invalid number or an uncomputable value in JavaScript.

// // // // Example:

// // // // console.log(0 / 0); 
// // // // console.log(parseInt("hello")); 

// // // // const invalidOperation = "hello" * 3;
// // // // console.log(invalidOperation);


// // // //...........................................................6....................................................

// // // //arrow functions (introduced in ES6) provide a shorter, more concise syntax for writing functions. Arrow functions allow for simpler function definitions, especially for inline and anonymous functions.

// // // // Syntax of Arrow Functions

// // // // (param1, param2, ..., paramN) => expression


// // // // const add = function(a, b) {
// // // //     return a + b;
// // // //   };
  
// // // //   const addArrow = (a, b) => a + b;
  
// // // //   console.log(add(5, 3));       
// // // //   console.log(addArrow(5, 3));  
  

// // // //..............................................7................................................

// // // // What is the for-in loop in JavaScript? Give its syntax
// // // //  the for...in loop is a loop specifically designed for iterating over the properties of an object. It allows you to go through each enumerable property (or key) of an object one by one. Although it can also be used with arrays, for...in is generally better suited for objects, while other loops (like for...of) are typically preferred for arrays.

// // // //examples.

// // // // const person = {
// // // //     name: "diksha",
// // // //     age: 30,
// // // //     city: "himachal"
// // // //   };
  
// // // //   for (let key in person) {
// // // //     console.log(key + ": " + person[key]);
// // // //   }
  

// // // //.............................................8.................................................


// // // // Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// // // // 1. Local Scope
// // // // Local scope refers to variables that are defined within a specific function or block and are not accessible outside of that function or block.

// // // // Variables declared inside a function have local scope and can only be accessed from within that function.

// // // // function myFunction() {
// // // //     let localVar = "I'm local";
// // // //     console.log(localVar); 
// // // //   }
  
// // // //   myFunction(); 
// // // //   console.log(localVar); 
  
// // // //2. Block Scope
// // // Block scope is a type of scope that limits the visibility of variables to the block in which they are defined. In JavaScript, block scope is created using curly braces {}.

// // // let and const declarations have block scope. Variables declared with var, however, do not have block scope; they are function-scoped.

// // // example.

// // // if (true) {
// // //     let blockVar = "I'm block scoped";
// // //     console.log(blockVar); 
// // //   }
  
// // //   console.log(blockVar);


// // // // 3. Functional Scope
// // // Functional scope means that variables declared within a function are not accessible outside that function. This is often referred to as local scope, but it emphasizes the function's role in defining scope.

// // // Example:
// // // function anotherFunction() {
// // //   var funcVar = "I'm function scoped";
// // //   console.log(funcVar); 
// // // }

// // // anotherFunction(); 
// // // console.log(funcVar);


// // //  4. Scope Chain
// // The scope chain is the mechanism that JavaScript uses to resolve variable names. When you try to access a variable, JavaScript looks up the scope chain to find the variable in the following order:

// // Example: 
// // let globalVar = "I'm global";

// // function outerFunction() {
// //   let outerVar = "I'm from the outer function";

// //   function innerFunction() {
// //     let innerVar = "I'm from the inner function";
// //     console.log(innerVar); 
// //     console.log(outerVar); 
// //     console.log(globalVar); 
// //   }

// //   innerFunction();
// // }

// // outerFunction();
// // console.log(globalVar); 
// // console.log(outerVar); 
//   //........................................9...................................................

//   //  What is difference between null and undefined and where to use what?

//   // 1) undefined

// // undefined is a type and value in JavaScript that indicates a variable has been declared but has not yet been assigned a value.
// // It is the default value of uninitialized variables and the return value of functions that do not explicitly return a value.
// // Example:

// // let a; 
// // console.log(a); 

// // function myFunction() {}
// // console.log(myFunction());

// // 2). null

// // null is a special value that represents the intentional absence of any object value. It is often used to indicate that a variable should hold an object but does not currently point to any object.
// // null is an object type in JavaScript.
// // Example:

// // let b = null; 
// // console.log(b); 


// //.............................10 ......................

// // 1. map Method
// // The map method creates a new array by applying a given function to each element of the original array. It does not modify the original array

// // const numbers = [1, 2, 3, 4, 5];


// // const squaredNumbers = numbers.map(num => num * num);

// // console.log(squaredNumbers); 



// // 2. filter Method
// // The filter method creates a new array containing all elements of the original array that pass a specified test (i.e., that return true for the given condition). Like map, it does not modify the original array.

// // const numbers = [1, 2, 3, 4, 5, 6];


// // const evenNumbers = numbers.filter(num => num % 2 === 0);

// // console.log(evenNumbers); 

// //.............................................................11........................................................


// // Given an array of 0's and 1's find out number of 0's 

// function countZeroes(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) {
//             count++;
//             }
//             }
//             return count;
//             }
//             console.log(countZeroes([1, 0, 1, 0, 1]));


//...........................................12................................................................


// Given an array find out total no. of odd and even nos.


// function count_odd_even() {
//     let arr = [1,2,3,4,5]
//     let odd = 0;
//     let even = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             even++;
//             } else {
//                 odd++;
//                 }
//                 }
//                 return [odd, even];
//                 }
//                 console.log(count_odd_even());


// ..................................................13...........................................


// Given a string find out number of vowels

            // function Count_Vowels(S) {
            //     const vowels = "AEIOUaeiou"; 
            //     let count = 0;
            
                
            //     for (let char of S) {
            //         if (vowels.includes(char)) {
            //             count++; 
            //         }
            //     }
            
            //     return count; 
            
            // }
            // console.log(Count_Vowels("Hello world"));