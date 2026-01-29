// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //stack memory(primitive data types )  / heap memory (non primitive data types);

// 7 prmitive data types :-
// String
// number
// Boolean
// null
// undefined
// Symbol
// BigInt

// Non-Prmitive daratypes:-
// Array
// Object
// functions


let MyName="sarthak bhatnagar";

let anotherName= MyName;
console.log(anotherName);

anotherName="devansh bhatnagar";

console.log("anotherName");
console.log(MyName);


// non primitive data types 

let user1 = {
    name : "sarthak",
    age : 20,
}
   let user2 = user1;
   user2.name ="devansh";
   console.log(user1.name);
   console.log(user1.age);
   
   