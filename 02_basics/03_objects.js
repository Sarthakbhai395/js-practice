// singleton
// Object.create       // constructor method 

// object literals

//Const Mysym = symbol("key 1 ");

const JsUser ={
    name : "sarthak",
    age : 24,
   // [Mysym] : "key 1 ",    
    hobbies : ["coding", "dance","cricket",],
        address:"Agra",
        isloggedin : true
    
}
 //console.log(JsUser);

//  JsUser.hobbies[0]="traveling";
// Object.freeze(JsUser);
//  JsUser.isloggedin= false;
 console.log(JsUser);

 JsUser.greeting = function(){
    console.log("hello i am sarthak bhatnagar");
 }
 console.log(JsUser.greeting ());

 JsUser.greetingTwo= function(){
    console.log(`i am a js user , ${this.name}`);
    
 }
 console.log(JsUser.greetingTwo());
 
 

 