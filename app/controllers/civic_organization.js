// Index: http://localhost/views/event/index.html

nextplex.controller('CivicOrganizationIndexCtrl', function ($scope, CivicOrganizationRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/civic_organization/show.html?id="+id);
    steroids.layers.push({view: webView, keepLoading: true});
  };

  // Fetch all objects from the local JSON (see app/models/event.js)
  CivicOrganizationRestangular.all('civics').getList().then(function(civic_organizations){
    $scope.civic_organizations = civic_organizations;
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Civic Organizations");

});


// Show: http://localhost/views/event/show.html?id=<id>

nextplex.controller('CivicOrganizationShowCtrl', function ($scope, $filter, CivicOrganizationRestangular) {

  // Fetch all objects from the local JSON (see app/models/event.js)
  CivicOrganizationRestangular.one('civics', steroids.view.params['id']).get().then( function(civic_organization) {
    // Then select the one based on the view's id query parameter
    $scope.civic_organization = civic_organization;
    steroids.view.navigationBar.update(civic_organization.name);
    steroids.view.removeLoading();
  });

  // -- Native navigation
  steroids.view.navigationBar.update("");

});
