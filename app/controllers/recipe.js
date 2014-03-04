var recipeApp = angular.module('recipeApp', ['RecipeModel', 'ngTouch']);


// Index: http://localhost/views/recipe/index.html

recipeApp.controller('IndexCtrl', function ($scope, RecipeRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/recipe/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/recipe.js)
  RecipeRestangular.all('recipe').getList().then(function(recipes){
    $scope.recipes = recipes;
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Recipes");

});


// Show: http://localhost/views/recipe/show.html?id=<id>

recipeApp.controller('ShowCtrl', function ($scope, $filter, RecipeRestangular) {

  // Fetch all objects from the local JSON (see app/models/recipe.js)
  RecipeRestangular.all('recipe').getList().then( function(recipes) {
    // Then select the one based on the view's id query parameter
    $scope.recipe = $filter('filter')(recipes, {recipe_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Recipe " + steroids.view.params.id );

});
