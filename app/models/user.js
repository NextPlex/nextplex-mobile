// The contents of individual model .js files will be concatenated into dist/models.js

(function() {

// Protects views where angular is not loaded from errors
if ( typeof angular == 'undefined' ) {
	return;
};


var module = angular.module('UserModel', ['restangular']);

module.factory('UserRestangular', function(Restangular) {

	return Restangular.withConfig(function(RestangularConfigurer) {

		RestangularConfigurer.setBaseUrl('http://nextplex.com/rochester-ny');
		// RestangularConfigurer.setBaseUrl('/data');
		RestangularConfigurer.setRequestSuffix('.json');


	});

});


})();
