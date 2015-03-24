var takePicture = document.querySelector("#take-picture");
takePicture.onchange = function (event) {
    // Get a reference to the taken picture or chosen file
    var files = event.target.files,
        file;
    if (files && files.length > 0) {
        file = files[0];
    }
};

// Image reference
var showPicture = document.querySelector("#show-picture");

// Get window.URL object
var URL = window.URL || window.webkitURL;

// Create ObjectURL
var imgURL = URL.createObjectURL(file);

// Set img src to ObjectURL
showPicture.src = imgURL;

// For performance reasons, revoke used ObjectURLs
URL.revokeObjectURL(imgURL);