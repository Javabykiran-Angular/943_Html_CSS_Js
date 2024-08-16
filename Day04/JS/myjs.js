// console.log("Hello World...");



// var,let,const 
var a1;
var a_1,a$1;

// Data Types
// number(int,float,long,short) , string(''/""),boolean(true/false)
// any (number,string,boolean)
// void => It is a neutral data type => it can not strore any data type value => it not returning anything in method.
// null & undefined => misec. 
    // it used as value as well as data type 

var a=2.5;
// a='fgsdf';
var str='Sumit';
var str1=true;

// console.log("Value of a is "+a);
// console.log(`
//         Value of a is ${a}
//     `);

// if,if-else ,break,continue,switch 
var b=2;
// if(b<4){
//     console.log("Condition is true")
// }else{
//     console.log("Condition is false")
// }

var choice=22;
// switch(choice){
//     case 1: console.log("U rin case 1");
//             break;
//     case 2: console.log("U rin case 2");
//             break;
//     default: console.log("U r in default case ");
//             break;
// }

// Loop statement
// while,do-while,for,foreach

var count=5;

// while(count!=0){
//     console.log("Count is "+count);
//     count--;

// }

// do{
//     console.log("Count is "+count);
//     count--;
// }while(count!=0)

// for loop 

// for(var i=0;i<4;i++){
//     console.log("Value of i is "+i);
// }

// console.log("Value of i After the Loop  "+i);

// var => scope => it is global scope
// It is not memory efficient 

// let => scope => within a nearest block ({})

// for(let i=0;i<4;i++){
//     console.log("Value of i is "+i);
// }
// console.log("Value of i After the Loop  "+i);


// const 
// it make variable as constant
// scope => global as well as local 

const pi=3.14; //forward declaration & defination
// pi=3;

//Functions => User Defined Functions 

// 1 functions without parameter & without return Type
// 2 functions with parameter & without return Type
// 3 functions without parameter & with return Type
// 4 functions with parameter & with return Type

// 1 functions without parameter & without return Type

    function add1(){
        console.log("First type of Function is called...")
    }

 add1();
 
   