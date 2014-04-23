// Index: http://localhost/views/event/index.html

nextplex.controller('EventIndexCtrl', function ($scope, EventRestangular) {
  var today = new Date().setHours(0,0,0,0);
  var tonight = new Date().setHours(23,59,59,0);

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/event/show.html?id="+id, {keepLoading: true});
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/event.js)
  EventRestangular.all('events').getList().then(function(events){
    $scope.events = events;
    $scope.todayEvents = events.filter(function (event) {
      var eventDate = new Date(event.start_at);
      return eventDate >= today && eventDate <= tonight;
    });
    $scope.upcomingEvents = events.filter(function (event) {
      var eventDate = new Date(event.start_at);
      return eventDate > tonight;
    });
  });

  // -- Native navigation
  // steroids.view.navigationBar.show("Events");});
  steroids.view.navigationBar.show({
    titleImagePath: "/images/nextplex_logo@2x.png"
  });



});


// Show: http://localhost/views/event/show.html?id=<id>

nextplex.controller('EventShowCtrl', function ($scope, $filter, EventRestangular) {

  // Fetch all objects from the local JSON (see app/models/event.js)
  EventRestangular.one('events', steroids.view.params['id']).get().then( function(event) {
    // Then select the one based on the view's id query parameter
    $scope.event = event;
    $scope.no_event = !event;
    steroids.view.navigationBar.show($scope.event.name);
    steroids.view.removeLoading();
  });

  $scope.showUser = function(id) {
    webView = new steroids.views.WebView("/views/user/show.html?id="+id, {keepLoading: true});
    steroids.layers.push(webView);
  };

  // -- Native navigation
  steroids.view.navigationBar.show("");

});
