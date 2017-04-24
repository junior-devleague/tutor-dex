var num = 0;
var numTwo = 0;
var disliked = [];

/*
-make dynamic id by adding 'like' or 'dislike' and the last name 
-if the id already exists, add a number (would be used for multiple comments by user)
-if points are negative, turn button red
*/

/* POINT CHANGING
idea 1:
  id the buttons with numbers (i.e. l1 dl1 l2 dl2)
  use to target class of button with points 
    ex. document.getElementsByClassName("buttonClass[id]").innerHTML
  change inner html to add or subtract points
  check for positive and negative points
  if total is negative, make button style red

idea 2:
  id buttons with numbers (1,2,3,4)
  if number is odd, add a point | if number is even, subtract a point
  adding point:function targets itself
  subtracting:function subtracts 1 to target like button (so that the number is in one place)
*/

function plusOnePoint(id){
  // console.log("hello. i work :)");
  var pointReader = document.getElementById(id);
  // console.log(id);
  // console.log(num);
  if (id%2 == 1){
    num = num + 1;
    if (num > 0){
      pointReader = document.getElementById(id).innerHTML = "+" + num;
    } else{
      pointReader = document.getElementById(id).innerHTML = "" + num;
    }
  } else{
    console.log(id);
    num = num - 1;
    if (num > 0){
      pointReader = document.getElementById(id - 1).innerHTML = "+" + num;
    } else{
      pointReader = document.getElementById(id - 1).innerHTML = "" + num;
    }
  }
}

function plusSecondPoint(id){
  if (id%2 == 1){
    numTwo = numTwo + 1;
    if (numTwo > 0){
      pointReader = document.getElementById(id).innerHTML = "+" + numTwo;
    } else{
      pointReader = document.getElementById(id).innerHTML = "" + numTwo;
    }
  } else{
    console.log(id);
    numTwo = numTwo - 1;
    if (numTwo > 0){
      pointReader = document.getElementById(id - 1).innerHTML = "+" + numTwo;
    } else{
      pointReader = document.getElementById(id - 1).innerHTML = "" + numTwo;
    }
  }
}
