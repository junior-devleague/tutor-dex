/*
***********************************HOME JS*********************************************
*/

/*
input has class name "subject"
  input name is "search"
*/

/* PSEUDO CODE
-store questions from 3 views in an array or object
-assign onclick function to "ASK US"
-when clicked, check value of form (the input box)
-if it matches one of the questions, redirect to corresponding page using | window.location = "link.com" |
-use onsubmit attribute or current button
*/

var viewQuestions = ["WHAT IS 1+1?","WHAT IS THE DIFFERENCE BETWEEN SIMILE AND METAPHOR?","Why does the earth orbit the sun?"];

var questions = [
  {
    questionNum: 1,
    question: "WHAT IS 1+1?",
    href: "html/questionp1.html"
  },
  {
    questionNum: 2,
    question: "WHAT IS THE DIFFERENCE BETWEEN SIMILE AND METAPHOR?",
    href: "html/questionp2.html"
  },
  {
    questionNum: 3, 
    question:"Why does the earth orbit the sun?",
    href: "html/questionp3.html"
  }
];

function redirect(){
  console.log("hello");
  //check/validate form
  //forms[nameOfForm][nameOfInput] OR get input's id
  var formSays = document.getElementById("aQuestion").value;
  //redirects page
  if (formSays == "what"){
    //PLACEHOLDER
    window.location = "html/questionp1.html";
  }

  for (var i = 0; i < questions.length; i++){
    for (var key in questions){
      console.log(key);
      //questions[key] shows whole object
      console.log(questions[key]);
      if (questions[key].question == formSays){
        console.log("redirecting...");
        window.location = "html/questionp" + questions[key].questionNum + ".html";
      } 
    }
  }
}

/*****************************************************************************************/
/**********************************QUESTION JS********************************************/
/*****************************************************************************************/

function redirectToSubject(){
  window.location = "html/subject.html";
}

/***********************************QUESTION JS*********************************************/
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


/****************************POINT ADDITION**********************************/
function plusOnePoint(id){
  var pointReader = document.getElementById(id);
  console.log(id);
  console.log(num);
  
  localStorage.setItem("num", num);
  // localStorage.getItem("num");

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
  }
}

/****************************SORTING**********************************/
/* taken from https://www.w3schools.com/howto/howto_js_sort_list.asp */
/*
function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("list");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*check if the next item should
      switch place with the current item:
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /*if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark the switch as done:
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

window.onload = sortList;*/