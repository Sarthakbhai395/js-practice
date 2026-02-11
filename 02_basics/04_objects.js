const tinderUser = {}

tinderUser.name = "sarthak bhatnagar";
tinderUser.age =20;
tinderUser.address  = {
    city :"agra",
    state :"up",
    country :"india",
    pincode : 282001
}

// console.log(tinderUser.address.city);
const obj1 ={1:'A' , 2:'B'};
const obj2 ={3:'C' , 4 :'D'};
const obj4 ={name :"sarthak", age :20}

// const obj3 = {obj1 , obj2};
// console.log(obj3);
//  const obj3 = Object.assign({}, obj1, obj2);
//  console.log(obj3);
//  const obj3 = {...obj1,...obj2, ...obj4, name:"sarthak bhatnagr"};
//  console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));;
// console.log(Object.entries(tinderUser));;

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

//  course.courseInstructor
//  const {courseInstructor: instructor} = course

// //  console.log(courseInstructor);
// console.log(instructor);

console.log(tinderUser.hasOwnProperty('isloggedIn'));







