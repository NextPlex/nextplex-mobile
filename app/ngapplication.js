var nextplex = angular.module('nextplex', ['EventModel', 'UserModel', 'CivicOrganizationModel', 'ngTouch', 'ngSanitize']);

document.addEventListener("deviceready", onDeviceReady, false);

// Set page background color
steroids.view.setBackgroundColor("#f0eff4");

// device APIs are available
//
function onDeviceReady() {
    document.body.className += device.platform.toLowerCase();
}
