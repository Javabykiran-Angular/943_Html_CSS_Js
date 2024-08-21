
function onAlert(){
    let a=20;
    alert("Hi welcome... "+a );
}

function onPrompt(){
   let res= prompt("Enter the Value :: ");
   console.log("Value is "+res);
   alert(res);
}
function onConfirm(){
   let res= confirm("Do you want to delete this record?");
   console.log(res);
   if(res){
    alert("Thank for Visiting");
   }else{
    alert("Vist Again.... Bye ....");
   }
}

function onAddition(){
   let mynum1= document.getElementById("num1");
   let mynum2= document.getElementById("num2");

   let n1=parseInt(mynum1.value);
   let n2=parseInt(mynum2.value);

   let res= n1+n2;

   let divObj=document.getElementById("mydiv");

//    divObj.innerHTML="Addition is "+res;

    divObj.innerHTML="<h2>Addition is "+res+" </h2>";

   let ptagobj= document.getElementsByTagName("p");
   ptagobj[0].innerHTML="Addition is "+res;
   ptagobj[1].innerHTML="Hi welcome";


}
