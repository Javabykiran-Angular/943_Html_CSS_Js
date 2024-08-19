//Functions => User Defined Functions 

// 1 functions without parameter & without return Type
// 2 functions with parameter & without return Type
// 3 functions without parameter & with return Type
// 4 functions with parameter & with return Type

// 1 functions without parameter & without return Type

function add1(){
    console.log("First type of Function is called...")
}

// add1();

// 2 functions with parameter & without return Type
function add2(a,b){
    console.log("Addition is "+(a+b))
}

// add2(10,2);

// 3 functions without parameter & with return Type

function add3(){
    
    return (8+8);
}

let res=add3();
// console.log("Result is "+res);

// 4 functions with parameter & with return Type

function add4(a,b){
    return (a+b)
}

// console.log("Addition is "+add4(10,5));

// Anonymous functions
// function does not have any name 
// it execute there teself 

let temp1= function (){
    console.log(" Anonymous functions is called...")
}
// temp1();

let temp2= function (a,b){
    return (a+b)
}

let res1= temp2(40,5);

// console.log("Result is "+res1)

// fat arrow functions/ Arrow function 
// function does not have any name 
// it execute there teself 

let temp3= ()=>{
    console.log("fat arrow functions is called...")
}

// temp3();

let temp4=(a,b)=>{
    return (a+b);
}

let res3=temp4(20,5)
// console.log("Result is "+res3);

 let temp5=()=>{
    return ("Module Trainer Is Sumit");
 }

 let res6=temp5()
//  console.log("Data => "+res6);

// Basics of array
// array is dynamically growable & shrinkable 
// array is store homogenous as well as hetrogenous value

let a=[4,5,6];
let a1=[2.5,'Sumit',true];
let a3=[];
a3[0]=45;

// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i]);
// }

console.log(a);
console.log(a.join(" "));
console.log(a.join("#"));

console.log(a.join());








