//this for the topnavigation. Uses the icon and responsive menu for all devices.

function myFunction() {
    let x = document.getElementById("Topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//This is for the Book Genres
/* 
let bookGenres = () => {
  for( i=0; i < array.length; i++)
    if(array[i] == 0) {
        array[i] = newValue;
        break;
    }
}  */ 
