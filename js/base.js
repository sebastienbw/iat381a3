

// create the module and name it scotchApp
var scavengrApp = angular.module('scavengrApp', ['ngRoute']);

// configure our routes
scavengrApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/splash', {
            templateUrl : 'pages/splash.html',
            controller  : 'splashController'
        })

        // route for the about page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })
});

// create the controller and inject Angular's $scope
scavengrApp.controller('splashController', function($scope) {
    // create a message to display in our view
    $scope.message = 'I am Splash Screen';
});

scavengrApp.controller('homeController', function($scope) {
    $scope.message = "Honey, I'm Home!";
});

(function () {
    var takePicture = document.querySelector("#take-picture"),
        showPicture = document.querySelector("#show-picture");

    if (takePicture && showPicture) {
        // Set events
        takePicture.onchange = function (event) {
            // Get a reference to the taken picture or chosen file
            var files = event.target.files,
                file;
            if (files && files.length > 0) {
                file = files[0];
                try {
                    // Get window.URL object
                    var URL = window.URL || window.webkitURL;

                    // Create ObjectURL
                    var imgURL = URL.createObjectURL(file);

                    // Set img src to ObjectURL
                    showPicture.src = imgURL;

                    // Revoke ObjectURL
                    URL.revokeObjectURL(imgURL);
                }
                catch (e) {
                    try {
                        // Fallback if createObjectURL is not supported
                        var fileReader = new FileReader();
                        fileReader.onload = function (event) {
                            showPicture.src = event.target.result;
                        };
                        fileReader.readAsDataURL(file);
                    }
                    catch (e) {
                        //
                        var error = document.querySelector("#error");
                        if (error) {
                            error.innerHTML = "Neither createObjectURL or FileReader are supported";
                        }
                    }
                }
            }
        };
    }
})();