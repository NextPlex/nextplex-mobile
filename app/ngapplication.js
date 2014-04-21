var nextplex = angular.module('nextplex', ['EventModel', 'UserModel', 'ngTouch', 'ngSanitize']);

nextplex.directive('a', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
      if(attrs.href.match(/^http/)){
        elem.on('click', function(e){
          steroids.openURL(attrs.href);
        });
      }
    }
  };
});

document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    document.body.className += device.platform.toLowerCase();
}
