

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
        .when('/camera', {
            templateUrl : 'pages/camera.html',
            controller  : 'cameraController'
        })
});

// scavengrApp.factory('loginFactory', function () {
//     var loggedIn = false;
//     return {
//         login: function () {
//             loggedIn = true;
//         },
//         loggedIn: function () {
//             return loggedIn;
//         }
//     }
// })

// create the controller and inject Angular's $scope
scavengrApp.controller('appController', function($scope) {
    // create a message to display in our view
    $scope.isLoggedIn = false;
    $scope.login = function () {
        console.log('Trying to log in');
        $scope.isLoggedIn = true;
    }
});

scavengrApp.controller('cameraController', function($scope) {
    $scope.message = "Camera";
    $scope.takePicture = function () {
        console.log("pucture!")
        var takePicture = document.querySelector("#take-picture"),
        showPicture = document.querySelector("#show-picture");
        console.log("page loaded");
    if (takePicture && showPicture) {
        // Set events
        console.log("found camera stuff");
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
    };
});

// (function () {
//     var takePicture = document.querySelector("#take-picture"),
//         showPicture = document.querySelector("#show-picture");
//         console.log("page loaded");
//     if (takePicture && showPicture) {
//         // Set events
//         console.log("found camera stuff");
//         takePicture.onchange = function (event) {
//             // Get a reference to the taken picture or chosen file
//             var files = event.target.files,
//                 file;
//             if (files && files.length > 0) {
//                 file = files[0];
//                 try {
//                     // Get window.URL object
//                     var URL = window.URL || window.webkitURL;

//                     // Create ObjectURL
//                     var imgURL = URL.createObjectURL(file);

//                     // Set img src to ObjectURL
//                     showPicture.src = imgURL;
                    

//                     // Revoke ObjectURL
//                     URL.revokeObjectURL(imgURL);
//                 }
//                 catch (e) {
//                     try {
//                         // Fallback if createObjectURL is not supported
//                         var fileReader = new FileReader();
//                         fileReader.onload = function (event) {
//                             showPicture.src = event.target.result;
//                         };
//                         fileReader.readAsDataURL(file);
//                     }
//                     catch (e) {
//                         //
//                         var error = document.querySelector("#error");
//                         if (error) {
//                             error.innerHTML = "Neither createObjectURL or FileReader are supported";
//                         }
//                     }
//                 }
//             }
//         };
//     }
// })();