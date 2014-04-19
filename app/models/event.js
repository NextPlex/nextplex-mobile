// The contents of individual model .js files will be concatenated into dist/models.js

(function() {

// Protects views where angular is not loaded from errors
if ( typeof angular == 'undefined' ) {
	return;
};


var module = angular.module('EventModel', ['restangular']);

module.factory('EventRestangular', function(Restangular) {

	return Restangular.withConfig(function(RestangularConfigurer) {

		RestangularConfigurer.setBaseUrl('http://nextplex.com/api/rochester-ny');
		// RestangularConfigurer.setBaseUrl('/data');
		// RestangularConfigurer.setRequestSuffix('.json');


	});

});


})();
