let MyDate = new Date();
// console.log(MyDate.toString());

// console.log(MyDate.toLocaleString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toJSON());
// console.log(typeof MyDate);

let newDate = new Date(2026,0,4,1,55);
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);


// console.log(newDate.getTime());

// console.log (Date.now()/100);
// console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('Default',{
    weekday:'long',
    year:'2-digit',

});
console.log(newDate);
