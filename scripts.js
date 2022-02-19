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


function findInGrid( ) {
    let 
}


function findInList() {

}



function sortIt(array) {
    for(i=0; i < array.lengh-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if (array[j] > array[j+1]) {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
            }
        }
        return array;
    }
}
