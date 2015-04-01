// Code from here: https://gist.github.com/shovon/ffc30770515cd7d22d2b

let imgur = {
  share: function (clientID, domImage){
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = domImage.width;
    canvas.height = domImage.height;
    ctx.drawImage(domImage, 0, 0, canvas.width, canvas.height);
    let img;
    try {
      img = canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
    } catch(e) {
      img = canvas.toDataURL().split(',')[1];
    }
    return fetch('https://api.imgur.com/3/upload.json', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID ' + clientID
      },
      body: JSON.stringify({
        type: 'base64',
        name: 'myimage.jpg',
        title: 'My Image',
        description: 'Made using my super application',
        image: img
      })
    }).then(function (response) {
      return response.json();
    })
  }

}

export default imgur;
