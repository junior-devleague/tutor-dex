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
  console.log("hello. i work :)");
  var pointReader = document.getElementById(id);
  console.log(id);
  console.log(num);
  num = num + 1;
	pointReader.innerHTML = "+" + num;
  disliked.push(""+id);
}

function plusSecondPoint(id){
  console.log("hello. i work :)");
  var pointReader = document.getElementById(id);
  numTwo = numTwo + 1;
  pointReader.innerHTML = "-" + numTwo;
  disliked.push(""+id);
}

function minusOnePoint(id){
  var pointReader = document.getElementById(id).parentElement.getElementsByClassName("points");
  console.log(pointReader);
  num = num + 1;
  pointReader.innerHTML = "-" + num;
  // console.log("point subtracted :(");
}