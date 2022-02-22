function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}


function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}


function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
   let inputText = document.querySelector('input').value;
   let findNumber = document.getElementsByTagName('span');
   console.log(inputText);
   for ( let i = 0; i < findNumber.length; i++) {
       findNumber[inputText].classList.add('spanHighlighted');
   }
}


function findInList() {
    let listNumber = document.querySelector('input').value;
    let numberRow = document.getElementsByTagName('span');
    console.log(listNumber);
    for (let i = 0; i < numberRow.length; i++) {
        numberRow[listNumber].classList.add('spanHighlighted');
    }
}


function sortIt(array) {
    let numberArray = document.getElementsByTagName('span');
    console.log(numberArray);
    for (let i = 0; i < numberArray.length-1; i++) {
    }
  }