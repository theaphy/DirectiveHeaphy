var app = angular.module('drxn', []);

app.directive('mast', function(){
	return {
		restrict: "E",
		template: "<div>masthead</div>",
		replace: true
	};
});

app.directive('nrav', function(){
	return {
		restrict: "E",
		template: "<div>very many nravs</div>",
		replace: true
	};
});

app.directive('login', function(){
	return {
		restrict: "E",
		template: "<div>submit</div>",
		replace: true
	};
})

app.directive('posts', function(){
	return {
		restrict: "E",
		template: "<div>leftly</div>",
		replace: true
	};
})

app.directive('side', function(){
	return {
		restrict: "E",
		template: "<div>rightly</div>",
		replace: true
	};
})
