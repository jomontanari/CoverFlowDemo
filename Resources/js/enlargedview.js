function EnlargedView(title, imgs) {

    var view = Titanium.UI.createView({
        height:720,
        width:720,
        backgroundColor:'#ccc',
        borderWidth:'2',
        borderColor:'#fff'
    });

    var label = Titanium.UI.createLabel({
        text: title,
        height:70,
        width:720,
        top:0,
        backgroundColor:'#333',
        color:'#fff',
        textAlign:'center',
        zIndex: 100
    });



    var imgView = new ImageSpinner(imgs);

    view.add(imgView);
    view.add(new CloseButton());
    view.add(label);

    var animator = new Animator(view, null);
    animator.scale(0.56, 1, null);

    return view;
}