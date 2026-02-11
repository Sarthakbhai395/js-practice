const Marvelheros = ["ironman", "spiderman", "thor", "hulk"];
const dcheros =["superman", "flash", "batman"];

// const allheros =Marvelheros.concat(dcheros);

// console.log(allheros);

let allheros = [...Marvelheros, ...dcheros];
console.log(allheros);

allheros.push("wonderwomen");

console.log(allheros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 const otherarray =another_array.flat(Infinity);
 console.log(otherarray);

console.log( Array.isArray("sarthak"));


 console.log(Array.from("sarthak"));
 console.log(Array.from({
    name: "sarthak"                       // interesting 
 }));
 

 let score1 = 100;
 let score2 =200;
 let score3=300

 console.log(Array.of(score1,score2,score3));
 
 