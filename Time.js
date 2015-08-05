function showTime(){
	
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var m = insertZero(minutes);
	var s = insertZero(seconds);
	var hh = normalHours(hours);
	var h = insertZero(hh);
	document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(function(){showTime()},500);
}
function insertZero(i){
	if(i < 10){
		i= "0"+i;
	}
	return i;
}
function normalHours(j){
	if(j > 12){
		j = j-12;
	}
	return j;
}

window.addEventListener('load', showTime, false);
