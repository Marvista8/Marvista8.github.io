/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 }
 
 /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
   document.body.style.backgroundColor = "white";
 }





// Form validation code.
 function validate() {

 }
 /*
if( document.myForm.Name.value == "" ) {
    alert( "Please provide your name!" );
   document.myForm.Name.focus() ;
   return false;
}
if( document.myForm.EMail.value == "" ) {
    alert( "Please provide your Email!" );
   document.myForm.EMail.focus() ;
   return false;
}
if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
   document.myForm.Zip.value.length != 5 ) {          
   alert( "Please provide a zip in the format #####." );
   document.myForm.Zip.focus() ;
   return false;
}
if( document.myForm.Country.value == "-1" ) {
   alert( "Please provide your country!" );
   return false;   }
   return( true );
}
*/