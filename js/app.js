var num = 0;


//make dynamic id by adding 'like' or 'dislike' and the last name 
//if the id already exists, add a number (would be used for multiple comments by user)
function plusOnePoint(id){
  console.log("hello. i work :)");
  var pointReader = document.getElementById(id);
  console.log(id);
  console.log(num);
  num = num + 1;
	pointReader.innerHTML = "+" + num;
}

/* taken from https://www.w3schools.com/howto/howto_js_sort_list.asp */

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("list");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*check if the next item should
      switch place with the current item:*/
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /*if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop:*/
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark the switch as done:*/
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

window.onload = sortList;