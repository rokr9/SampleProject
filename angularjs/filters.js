angular.module("exampleApp.Filters", []).filter("dayName", function(){
	var dayNames = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"]
	return function(input){
		return angular.isNumber(input) ? dayNames[input] : input;
	}	
});