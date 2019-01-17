function Time() {
	var tim = new Date();
	document.getElementById("time").innerHTML = tim.toLocaleTimeString();
	document.getElementById("date").innerHTML = tim.toDateString();
	
}
var time = setInterval(Time, 1000);



var myTite = document.querySelector("img");

myTite.setAttribute("title", "proflie picture");


document.getElementById("textH").style.textTransform = "uppercase";
document.getElementById("textC").style.textTransform = "uppercase";
