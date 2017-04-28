/*
***********************************HOME JS*********************************************
*/


/*
***********************************QUESTION JS*********************************************
*/

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

//makes button grey when value is 0 or empty
function greyStart(){
  var idQuantity = document.getElementsByClassName("points");
  console.log(idQuantity);
  for (var i = 0; i < idQuantity.length; i++){
    var targetLike = document.getElementById(i)
    if (i%2 == 1){
      if (targetLike.innerHTML == "0" || targetLike.innerHTML == ""){
        targetLike.style.backgroundColor = "#E6E7F0";
      } else{
        targetLike.style.backgroundColor = "#8AE8A1";
      }
    }
  }
}
greyStart();

function plusOnePoint(id){
  var pointReader = document.getElementById(id);
  
  //checks if button id is odd or even (odd = add point | even = subtract point)
  if (id%2 == 1){
  //button id is POSITIVE
    num = num + 1;
    if (num > 0){
    //adds points
      pointReader.innerHTML = "+" + num;
      pointReader.style.backgroundColor = "#8AE8A1";
    } else if (num == 0){
      //change button color to gray
      pointReader.style.backgroundColor = "#E6E7F0";
      pointReader.innerHTML = "" + num;
    } else{
      pointReader.innerHTML = "" + num;
      pointReader.style.backgroundColor = "#C23B22";
    }
  } else{
    //button id is NEGATIVE
    //pointReader now targets previous button (w/ points)
    pointReader = document.getElementById(id - 1);
    console.log(id);
    //subtracts points
    num = num - 1;
    if (num > 0){
      pointReader.innerHTML = "+" + num;
    } else if (num == 0){
      //change button color to gray
      pointReader.style.backgroundColor = "#E6E7F0";
      pointReader.innerHTML = "" + num;
    } else{
      //change button color to red
      pointReader.style.backgroundColor = "#C23B22";
      pointReader.innerHTML = "" + num;
    }
  }
}

function plusSecondPoint(id){
 var pointReader = document.getElementById(id);
  
  //checks if button id is odd or even (odd = add point | even = subtract point)
  if (id%2 == 1){
  //button id is POSITIVE
    numTwo = numTwo + 1;
    if (numTwo > 0){
    //adds points
      pointReader.innerHTML = "+" + numTwo;
      pointReader.style.backgroundColor = "#8AE8A1";
    } else if (numTwo == 0){
      //change button color to gray
      pointReader.style.backgroundColor = "#E6E7F0";
      pointReader.innerHTML = "" + numTwo;
    } else{
      pointReader.innerHTML = "" + numTwo;
      pointReader.style.backgroundColor = "#C23B22";
    }
  } else{
    //button id is NEGATIVE
    //pointReader now targets previous button (w/ points)
    pointReader = document.getElementById(id - 1);
    console.log(id);
    //subtracts points
    numTwo = numTwo - 1;
    if (numTwo > 0){
      pointReader.innerHTML = "+" + numTwo;
    } else if (numTwo == 0){
      //change button color to gray
      pointReader.style.backgroundColor = "#E6E7F0";
      pointReader.innerHTML = "" + numTwo;
    } else{
      //change button color to red
      pointReader.style.backgroundColor = "#C23B22";
      pointReader.innerHTML = "" + numTwo;
    }
  }}
