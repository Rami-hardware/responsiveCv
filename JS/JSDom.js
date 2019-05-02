//make clock in C.V
var time = setInterval(Time(), 1000);

function Time() {
	var x = new Date();
	document.getElementById("time").innerHTML = x.toLocaleTimeString();
	document.getElementById("date").innerHTML = x.toDateString();
}
var myTite = document.querySelector("img");
//set attribute in image
myTite.setAttribute("title", "proflie picture");
var allHeadrsNames = document.querySelector("h1");
//changing the text
allHeadrsNames.setAttribute("title", "proflie picture");
document.getElementById("H").style.textTransform = "uppercase";
document.getElementById("H").setAttribute("title", "HTML");
