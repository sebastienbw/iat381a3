function imgurShare(imgSrc){
    console.log("imgur upload beginning");

    var clientID = '7a7918456680dc8';

    imgSrc = imgSrc.split(',')[1];

    return fetch('https://api.imgur.com/3/upload.json', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID ' + clientID
      },
      body: JSON.stringify({
        type: 'base64',
        // name: 'myimage.jpg',
        title: 'My Image',
        description: 'Made using my super application',
        image: imgSrc
      })
    }).then(function (response) {
        // console.log(response.json());
      return response.json();
    })
  // }
}

// console.log(imgur.share);
// create the module and name it scotchApp
var scavengrApp = angular.module('scavengrApp', ['ngRoute']);

scavengrApp.isMobile = 
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return true})(navigator.userAgent||navigator.vendor||window.opera);

//for testing on desktop
//scavengrApp.isMobile = false;

console.log(scavengrApp.isMobile);

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

        .when('/imagefeed', {
            templateUrl : 'pages/imagefeed.html',
            // controller  : 'imageFeedController'
        })

        .when('/lists', {
            templateUrl : 'pages/lists.html',
            // controller  : 'listsController'
        })

        .when('/viewlist', {
            templateUrl : 'pages/viewlist.html',
            // controller  : 'viewListController'
        })
});

// create the controller and inject Angular's $scope
scavengrApp.controller('appController', function($scope) {

    // $scope.imageArray = [];

    // scavengrApp.updateChat = function() {
    //     $scope.imageArray = scavengrApp.imageArray.asArray();
    //     $scope.$apply(); //udpate view
    //     console.log($scope.imageArray);
    // };

    // create a message to display in our view
    $scope.isLoggedIn = false;
    $scope.login = function () {
        console.log('Trying to log in');
        $scope.isLoggedIn = true;
    }
});

scavengrApp.controller('cameraController', function($scope) {
    $scope.pageTitle = "Camera";
    $scope.pictureTaken = false;

    $("#submit-image").click(function(){
        addImageToList();
    });

    $scope.swapImage = function () {
        $scope.pictureTaken = true;
    }

    console.log("camera controller");

    $scope.takePicture = function () {
        console.log("picture!")
        var takePicture = document.querySelector("#take-picture"),
        showPicture = document.querySelector("#show-picture");
        // console.log("page loaded");
        if (takePicture && showPicture) {
            // share();
            // Set events
            console.log("found camera stuff");
            takePicture.onchange = function (event) {
                // Get a reference to the taken picture or chosen file
                var files = event.target.files,
                    file;
                if (files && files.length > 0) {
                    file = files[0];
                    if (scavengrApp.isMobile) {
                        //$scope.swapImage();
                        // Get window.URL object
                        var URL = window.URL || window.webkitURL;

                        // Create ObjectURL
                        var imgURL = URL.createObjectURL(file);

                        // Set img src to ObjectURL
                        showPicture.src = imgURL;
                        $scope.pictureTaken = true;
                        $scope.$apply();

                        imgurUpload(showPicture.src);
                        // Revoke ObjectURL
                        URL.revokeObjectURL(imgURL);
                    }
                    else {
                        try {
                            // Fallback if createObjectURL is not supported
                            var fileReader = new FileReader();
                            fileReader.onload = function (event) {
                                showPicture.src = event.target.result;
                                imgurUpload(showPicture.src);
                            };
                            fileReader.readAsDataURL(file);
                            
                            $scope.pictureTaken = true;
                            $scope.$apply();

                            // imgurUpload();

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

    updateUploadableLists();
});

scavengrApp.controller('imageFeedController', function($scope) {
    console.log("image feed controller");
    $scope.pageTitle = "Image Feed";
    console.log($scope.pageTitle);
    updateImageFeed();

});

scavengrApp.controller('listsController', function($scope) {

    console.log("lists controller");
    $scope.pageTitle = "Hunts";
    // $scope.message = "yo";
    updateListsFeed();

    $(".list-box").click(function() {
        scavengrApp.currentList = this.id;
        console.log(scavengrApp.currentList);
        // console.log($(".list-box h1").html());
    });
});

scavengrApp.controller('viewListController', function($scope) {
    var listsArray = scavengrApp.listsArray.asArray();
    console.log("list view controller");
    $scope.pageTitle = listsArray[listsArray.length-1-scavengrApp.currentList].name;
    $scope.description = listsArray[listsArray.length-1-scavengrApp.currentList].description;
    // $scope.message = "yo";
    // updateListsFeed();
    updateListImageFeed();
});


function imgurUpload(imgSrc) {
    var domImg = document.getElementById('#show-picture');
    console.log(imgSrc);
    var result = imgurShare(imgSrc);
    // console.log(result);
    result.then(function (data) {
        console.log(data.data.link);
        var data = {image: data.data.link};
        console.log(data);
        scavengrApp.imageArray.push(data);
    });
}

function updateImageFeed() {
    console.log("updating image feed");
    var imagesArray = scavengrApp.imageArray.asArray();
    for (var i = 0; i < imagesArray.length; i++) {
        // images = images + "<img src='" + scavengrApp.imageArray.asArray()[i].image + "'>";
        // console.log(scavengrApp.imageArray.asArray());
        var img=document.createElement("img");
        img.setAttribute('src', imagesArray[imagesArray.length-1-i].image);
        img.setAttribute('class', 'image-feed-item');
        // oImg.setAttribute('height', '1px');
        // oImg.setAttribute('width', '1px');
        document.getElementById('imageFeedList').appendChild(img);
    }
}

function updateListImageFeed() {
    console.log("updating list image feed");
    var imagesArray = scavengrApp.listsArray.asArray()[scavengrApp.listsArray.length - 1 - scavengrApp.currentList].images;
    console.log(imagesArray);
    for (var i = 0; i < imagesArray.length; i++) {
        // images = images + "<img src='" + scavengrApp.imageArray.asArray()[i].image + "'>";
        // console.log(scavengrApp.imageArray.asArray());
        var img=document.createElement("img");
        img.setAttribute('src', imagesArray[i]);
        img.setAttribute('class', 'image-feed-item');
        // oImg.setAttribute('height', '1px');
        // oImg.setAttribute('width', '1px');
        document.getElementById('listImageFeed').appendChild(img);
    }
}

function updateListsFeed() {
    console.log("updating lists");
    var listsArray = scavengrApp.listsArray.asArray();
    for (var i = 0; i < listsArray.length; i++) {
        // images = images + "<img src='" + scavengrApp.imageArray.asArray()[i].image + "'>";
        // console.log(scavengrApp.imageArray.asArray());
        var list=document.createElement("a");
        list.setAttribute('style', "background-image: url('" + listsArray[listsArray.length-1-i].images[0] + "')");
        list.setAttribute('class', 'list-box');
        list.setAttribute('id', i);
        list.setAttribute('href', '#viewlist');
        // oImg.setAttribute('height', '1px');
        // oImg.setAttribute('width', '1px');

        var listTitle = document.createElement("h1");
        // listTitle.setAttribute('text', listsArray[listsArray.length-1-i].name);
        listTitle.appendChild(document.createTextNode(listsArray[listsArray.length-1-i].name));
        list.appendChild(listTitle);

        document.getElementById('list-container').appendChild(list);
    }
}

function updateUploadableLists() {
    console.log("updating uploadable lists");
    var listsArray = scavengrApp.listsArray.asArray();
    for (var i = 0; i < listsArray.length; i++) {
        // images = images + "<img src='" + scavengrApp.imageArray.asArray()[i].image + "'>";
        // console.log(scavengrApp.imageArray.asArray());
        var list=document.createElement("option");
        list.setAttribute('value', listsArray[listsArray.length-1-i].name);

        // var listTitle = document.createElement("h1");
        // // listTitle.setAttribute('text', listsArray[listsArray.length-1-i].name);
        list.appendChild(document.createTextNode(listsArray[listsArray.length-1-i].name));
        // list.appendChild(listTitle);

        document.getElementById('uploadable-list-options').appendChild(list);
    }
}

function addImageToList() {
    var list = $('#uploadable-list-options').val();
    var listsArray = scavengrApp.listsArray.asArray();
    // console.log(scavengrApp.listsArray.indexOf({name: list}));

    for (var i = 0; i < listsArray.length; i++) {
        if (listsArray[i].name == list) {
            // // scavengrApp.listsArray[i].images.push("test");
            // // listsArray[i].images = "test";
            // console.log("it hapened dhsajldfasfhjdsl;afjdskal;");
            // // console.log(listsArray[i].images.asArray());
            // var tempList = scavengrApp.listsArray.asArray()[i];
            // scavengrApp.listsArray.remove(i);
            // // tempList.images.push("yeh");

            // tempList.images.asArray();
            // console.log(tempList.images.asArray());
            // scavengrApp.listsArray.push(tempList);
            // console.log(scavengrApp.listsArray.asArray());
            // console.log(tempList);
            //////////////////////////////
            // [TODO: Allow adding image to the list]
            /////////////
            // listsArray.length++;
            // var testArray = listsArray[i].images;
            // testArray.push("yo");
            // console.log(testArray);

            // console.log("new image added: " + scavengrApp.listsArray.asArray()[i]);
        }
        
    }
    // console.log()

    // scavengrApp.listsArray.push({image: })
    // console.log(scavengrApp.listsArray.asArray();
// 
}
