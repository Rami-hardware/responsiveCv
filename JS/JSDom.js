<<<<<<< HEAD
Math.PI; 
var time = setInterval(Time, 1000);
function Time() {
	var x = new Date();
	document.getElementById("time").innerHTML = x.toLocaleTimeString();
	document.getElementById("date").innerHTML = x.toDateString();

}
var addArt = document.querySelector("img");
addArt.setAttribute('title', 'profile picture'); 

=======
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
>>>>>>> 35df658ba22e90d21a5f857beeb6ba1c9e7a1cda
