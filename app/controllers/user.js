
// Show: http://localhost/views/user/show.html?id=<id>

nextplex.controller('UserShowCtrl', function ($scope, $filter, UserRestangular) {

  // Fetch all objects from the local JSON (see app/models/user.js)
  UserRestangular.one('users', steroids.view.params['id']).get().then( function(user) {
    // Then select the one based on the view's id query parameter
    $scope.user = user;
    $scope.no_user = !user;
    steroids.view.navigationBar.show($scope.user.username);
    steroids.view.removeLoading();
  });

  // -- Native navigation
  steroids.view.navigationBar.show("");

});
