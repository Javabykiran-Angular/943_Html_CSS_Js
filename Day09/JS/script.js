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

// Gender
let genderError=document.getElementById("genderError");
let genderinput= document.getElementsByName("gender");


// Chechbox 
let technology= document.getElementsByName("technology");
let techError=document.getElementById("techError");
let cnt=0;
cnt=checkBoxValidation(technology,cnt);

// Drop Down
let city= document.getElementById("city");
let cityValue=city.value;
let cityError= document.getElementById("cityError");

// alert(city.value);
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
   }else if(genderinput[0].checked==false && genderinput[1].checked==false){
      genderError.innerHTML="** Please Select a Gender";
      return false;
   }else if(cnt==0){
      techError.innerHTML="**Please Select a technology";
      return false;
   }else if(cityValue=="select city"){
      cityError.innerHTML="*Please Select City";
      return false;
   }
   else{
    return true;
   }

}


function checkBoxValidation(technology,cnt){
   for(let i=0;i<technology.length;i++){
      if(technology[i].checked==true){
         cnt++;
      }
   }
   return cnt;
}