(function(){
  var items = [
	{
	name: 'Azure', 
	price: 2.95 ,
	forSale : true,
	soldOut : false,
	reviews : [
		{
		stars: 5,
		body: "I love this product!",
		author: "john.doe@email.com"
		},
		{
		stars: 1,
		body: "This product is bad",
		author: "jane.doe@email.com"
		}
	]
	}, 
	{
	name: 'Office', 
	price: 3.95 ,
	forSale : true,
	soldOut : false,
	reviews : [
		{
		stars: 4,
		body: "This is a good product!",
		author: "joe@thomas.com"
		},
		{
		stars: 3,
		body: "This is decent product.",
		author: "tim@hater.com"
		}
	]
	}
];

  var app = angular.module('ItemStore', []);

  app.controller('StoreController', function($scope){
    this.products = items;

	function sayHello(name){
	   console.log('Hello ' + name);
	}
  });
  
  app.controller("ReviewController", function(){
	this.review = {};
	
	this.addReview = function(product) {
	        console.log('in addReview');
		product.reviews.push(this.review);
		this.review = {};
	};
 });
 
 app.directive('itemTitle', function(){
    return {
        restrict : 'E',
        templateUrl : 'item-title.partial.html'
   };
});
})();