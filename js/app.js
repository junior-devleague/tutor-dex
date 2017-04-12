var num = 0;
var numTwo = 0;
var disliked = [];

//make dynamic id by adding 'like' or 'dislike' and the last name 
//if the id already exists, add a number (would be used for multiple comments by user)
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
  var pointReader = document.getElementById(id);
  num = num + 1;
  pointReader.innerHTML = "-" + num;
  console.log("point subtracted :(");
}