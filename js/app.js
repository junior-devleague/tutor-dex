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

/*
ideas for home page:
idea 1: 
  if question from one of the views is input in the form, redirect to that page on click ("ASK US")
  i.e. function that is invoked on click of button, checks if input has question, if true then redirect
*/

function plusOnePoint(id){
  var pointReader = document.getElementById(id);

  //checks if button id is odd or even (odd = add point | even = subtract point)
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
      //change button color to gray
      pointReader = document.getElementById(id - 1).innerHTML = "" + num;
      if (num == 0){
        pointReader.color=#C23B22
      }
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
