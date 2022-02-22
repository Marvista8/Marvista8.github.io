function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 }
 
 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
   document.body.style.backgroundColor = "white";
 }

 function validateForm() {
   let l = document.forms["myForm"]["lname"].value;
   let x = document.forms["myForm"]["fname"].value;
   if (x == "") {
     alert("Please fill out your first name, thank you!");
     return false;
   }
 }


/*// Form validation code.
 function validate() {
const loginForm = document.getElementsByClassName('loginForm').value;
const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const pswd = document.getElementById('pswd').value;
const btn2 = document.getElementById('btn2').value;

console.log(loginForm, fname, lname, email, pswd, btn2); 

   if (document.loginForm.fname.value == "") {
      alert("Please provide your first name!"); 
      document.loginForm.fname.value.focus();
      return false;
   }
   if (document.loginForm.lname.value == "") {
      alert("Please provide you last name!");
      document.loginForm.lname.value.focus();
      return false;
   }
   if (document.loginForm.email.value == "") {
      alert("Please provide your email address!");
      document.loginForm.email.value.focus();
      return false;
   }
   if (document.loginForm.pswd.value == "") {
      alert("Please provide you password!");
      document.loginForm.pswd.value.focus();
      return false;
   }
 }*/