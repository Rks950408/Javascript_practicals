const arr=[1,2,3,4,5];
 
console.log(arr[1]);
console.log(arr[2]);

//How to do  destructing in array

const [a,b,c,d,e]=arr;
console.log(e);

// object destructing 

const person={
    name:"patel",
    age:20,
    city:"Ahmedabad",
    country:"India",
    hobbies:["cricket","football","tennis"],
    
};

// acess the value

//  dot notation
console.log(person.age);
// Bracket notation
console.log(person["age"]);


// destruicting
const {age,city,name,country,hobbies}=person;
console.log(age,city)
console.log(hobbies,country);
console.log(name);