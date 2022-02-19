//Responsive top-navigation function
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

const searchBar = document.getElementsById('searhBar');

searchBar.addEventListener('keypu', (event) => {

})

const namesFromDOM = document.getElementsByClassName("Title");
