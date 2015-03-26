// var request = require('superagent');


// console.log("hello world");

// request
//   .get('https://api.imgur.com/3/gallery/hot/viral/0.json')
//   .set('Authorization', 'Client-ID 7a7918456680dc8')
//   .end(function (error, res) {
//     var parsed = JSON.parse(res.text).data.filter(function (image) {
//       // return image.type === 'image/jpeg';

//       // image.type:
//       //
//       //    'image/jpeg'
//       //    'image/gif'
//       //    'image/png'
//       return /^image\/(jpeg|gif|png)$/.test(image.type);
//     });
//     console.log(parsed);
//     parsed.slice(0, 10).forEach(function(image) {
//         var img = new Image();
//         img.src = image.link;

//         document.body.appendChild(img);
//     });
//   }.bind(this));

// create the module and name it scotchApp
var scavengrApp = angular.module('scavengrApp', ['ngRoute']);
// function share() {
//   // var canvas = document.createElement('canvas');
//   // var ctx = canvas.getContext('2d');
//   // canvas.width = domImage.width;
//   // canvas.height = domImage.height;
//   // ctx.drawImage(domImage, 0, 0, canvas.width, canvas.height);
//   // var img;
//   // try {
//   //   img = canvas.toDataURL('image/png', 0.9).split(',')[1];
//   // } catch(e) {
//   //   img = canvas.toDataURL().split(',')[1];
//   // }
//   var img = "camera.png";
//   var w = window.open();
//   return fetch('https://api.imgur.com/3/upload.json', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Client-ID 7a7918456680dc8'
//     },
//     body: JSON.stringify({
//       type: 'base64',
//       name: 'camera.png',
//       title: 'My Image',
//       description: 'Made using my super application',
//       image: img
//     })
//   }).then(function (response) {
//     return response.json();
//   })
// }

//  function imgurUpload() {
//     console.log("hey");
//     $.ajax({ 
//     url: 'https://api.imgur.com/3/upload',
//     headers: {
//         'Authorization': 'Client-ID 7a7918456680dc8'
//     },
//     type: 'POST',
//     data: {
//         'image': 'camera.png'
//     },
//     success: function() { console.log('cool'); }
// });
// }


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
        share();
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