angular.module("exampleApp").filter("exFilter", function(){
	return function(value, reverse){
		if(angular.isString(value)){
			var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
			return(reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase())+intermediate.substr(1);

		} else {
			return value;
		}
	};
}).filter("skip", function(){
	return function(data, count){
		if(angular.isArray(data) && angular.isNumber(count)){
			if(count>data.length || count < 1){
				return data;
			} else{
				return data.slice(count);
			}
		} else {
			return data;
		}
	};
}).filter("combined", function($filter){
	return function(data, count, limit){
		var skippedData = $filter("skip")(data, count);
		return $filter("limitTo")(skippedData, limit);
	};
});