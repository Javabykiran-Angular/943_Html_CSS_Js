function validation(){

    //username
   let username= document.getElementById("username").value;
let usernameError=document.getElementById("usernameError");

// password
let pwd= document.getElementById("pwd").value;
let pwdError=document.getElementById("pwdError");


// Confirm password
let confirmpwd= document.getElementById("confirmpwd").value;
let pwdconfirmError=document.getElementById("pwdconfirmError");

  // alert(username.length);
   if(username.trim()==''){
      //  alert("Please Enter the Username")
      usernameError.innerHTML="Please Enter the Username";
        return false;
   }else if((username.length<3) || (username.length>5)){
   // alert("Please Enter the min char 3 & max chara 5");
   usernameError.innerHTML="Please Enter the min char 3 & max chara 5";
    return false;
   }else if(pwd.trim()==''){
    pwdError.innerHTML="Please Enter the Password";
    return false;
   }else if(confirmpwd.trim()==''){
    pwdconfirmError.innerHTML="Please Enter the Password";
    return false;
   }else if(pwd!=confirmpwd){
    pwdconfirmError.innerHTML="Password & confirm Password should be match";
    return false;
   }
   else{
    return true;
   }


}