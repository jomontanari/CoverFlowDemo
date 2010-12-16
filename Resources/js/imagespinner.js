function ImageSpinner(imgs) {

    var imgArray = imgs;

    var view = Titanium.UI.createImageView({
        width:720,
        height:720,
        zIndex:1
    });

    if(imgArray != null) {
        view.image = imgArray[0];
    }

    

    return view;
}