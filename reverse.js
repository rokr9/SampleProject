function reverse(){
	var a = document.getElementById('line').value;
	var b = a.split("").reverse().join("");
	document.getElementById('show').innerHTML = b;
}
document.getElementById('myBtn').addEventListener('click', reverse);