// Rest and spread operator


//  spead operator make to convert the duplicate value
//spread operators :objects /array too much used in function 
//...
//duplicate
 const arr=[1,2,3]
 const dupticateArr=[...arr,4,5,6,"apple"];
 console.log(dupticateArr); // [1, 2, 3]


 //how to merge the two array

 const num1=[12,56,54,55];
 const num2=[12245,456,5666,554];

//  output result=[1,2,3,4,5,6,]
const result=[...num1,...num2];
console.log(result);


// object 
//merge the object
const obj1={
    a:1,
    b:2,
};
const obj2={
    c:3,
    d:"Rahul",
};

//res={
//    a:1,  
//    b:2,
        //    c:3,
        //    d:"Rahul",

//}

const res={...obj1,...obj2};
console.log(res);


//function 
function sum(){
    return 1+2+3+4+5;
}
console.log(sum());

function sum(...numbers){
let sum=0;
for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i];
    
}    return sum;
}
console.log(sum(1,2,3,4,5,6));