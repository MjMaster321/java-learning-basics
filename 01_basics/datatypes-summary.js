// primitive data type 

// 7 types - string, number, boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // result will be false ; as we used symbol hance each will be unique 


// reference (non primitive)

// Arrays, objects, functions 

const heroes = ["shaktiman", "spiderman", "batman"];  // arrays (written in square braces)

let Obj = {
    name: "mayank",                          //   Object ( written in curly braces )
    age : "21",
}

const myFunction = function(){
         console.log("Hello world");

}


// Return type of variables in JavaScript
// 1) Primitive Datatypes
 //      Number => number
 //      String  => string
  //     Boolean  => boolean
  //     null  => object
  //     undefined  =>  undefined
  //    Symbol  =>  symbol
 //      BigInt  =>  bigint

// 2) Non-primitive Datatypes
  //     Arrays  =>  object
  //     Function  =>  function
  //     Object  =>  object