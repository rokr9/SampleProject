app.controller("topLevelCtrl", function($scope){
			$scope.data = {
				textValue : "Hello! Mike."
			};

			$scope.reverse = function(){
				$scope.data.textValue =  $scope.data.textValue.split('').reverse().join('');
			}
			$scope.changeCase = function(){
				var result = [];
				angular.forEach($scope.data.textValue.split(''), function(char, index){
					result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());
				})	;		
				$scope.data.textValue = result.join('');
			}
});

app.controller("firstChildCtrl", function($scope){
	$scope.changeCase = function(){
		$scope.data.textValue = $scope.data.textValue.toString().toUpperCase();
	}
});
app.controller("secondChildCtrl", function($scope){
	$scope.changeCase = function(){
		$scope.data.textValue = $scope.data.textValue.toString().toLowerCase();
	}	
});