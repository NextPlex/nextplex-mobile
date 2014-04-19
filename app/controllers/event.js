var nextplex = angular.module('nextplex', ['EventModel', 'ngTouch']);


// Index: http://localhost/views/event/index.html

nextplex.controller('IndexCtrl', function ($scope, EventRestangular) {
  var today = new Date().setHours(0,0,0,0);
  var tonight = new Date().setHours(23,59,59,0);

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
  // steroids.view.navigationBar.show("Events");});
  steroids.view.navigationBar.show({
    titleImagePath: "/images/nextplex_logo@2x.png"
  });

  $scope.todayEvents = function (event) {
    var eventDate = new Date(event.start_at);
    return eventDate >= today && eventDate <= tonight;
  }
  $scope.upcomingEvents = function (event) {
    var eventDate = new Date(event.start_at);
    return eventDate > tonight;
  }

});


// Show: http://localhost/views/event/show.html?id=<id>

nextplex.controller('ShowCtrl', function ($scope, $filter, EventRestangular) {

  // Fetch all objects from the local JSON (see app/models/event.js)
  EventRestangular.all('events').getList().then( function(events) {
    // Then select the one based on the view's id query parameter
    $scope.event = $filter('filter')(events, {id: steroids.view.params['id']})[0];
    steroids.view.navigationBar.show($scope.event.name);
  });

  // -- Native navigation
  steroids.view.navigationBar.show("");

});
