var nextplex = angular.module('nextplex', ['EventModel', 'UserModel', 'ngTouch', 'ngSanitize']);

document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    document.body.className += device.platform.toLowerCase();
}
