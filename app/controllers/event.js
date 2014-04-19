var nextplex = angular.module('nextplex', ['EventModel', 'ngTouch']);


// Index: http://localhost/views/event/index.html

nextplex.controller('IndexCtrl', function ($scope, EventRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/event/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/event.js)
  EventRestangular.all('events').getList().then(function(events){
    $scope.events = events;
  });

  // -- Native navigation
  steroids.view.navigationBar.show({
    titleImagePath: "/images/nextplex_logo@2x.png"
  });

});


// Show: http://localhost/views/event/show.html?id=<id>

nextplex.controller('ShowCtrl', function ($scope, $filter, EventRestangular) {

  // Fetch all objects from the local JSON (see app/models/event.js)
  EventRestangular.all('events').getList().then( function(events) {
    // Then select the one based on the view's id query parameter
    $scope.event = $filter('filter')(events, {id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.update("Event " + steroids.view.params.id );

});
