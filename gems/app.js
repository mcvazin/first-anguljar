(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http) {
    var gemStore = this;
	gemStore.products = [];
	gemStore.kursValut = [];
	 
	$http.get('store-products.json').success(function(data){
		 gemStore.products = data;
    }); 
	
	$http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').success(function(data){
		 gemStore.kursValut = data;
    }); 
	
  }]);
  
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
  
  
})();