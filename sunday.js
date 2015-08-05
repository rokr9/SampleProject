

function checkDay() {
	var a = parseInt(document.getElementById('year_val').value);
	var b = 36 + a + Math.round((a-1)/4) - Math.round((a-1)/100) + Math.round((a-1)/400);
	var days = [moday, tuesday, wednesday, thursday, firday, saturday, sunday];
	var c = Math.round(b%7);
	document.getElementById('show').innerHTML = days[c];
}
document.getElementById('myBtn').addEventListener('click',checkDay);