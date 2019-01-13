var time = setInterval(Time, 1000);

function Time() {
	var x = new Date();
	document.getElementById("time").innerHTML = x.toLocaleTimeString();
	document.getElementById("date").innerHTML = x.toDateString();
	
}