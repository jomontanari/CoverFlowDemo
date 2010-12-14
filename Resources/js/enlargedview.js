function EnlargedView(title) {

    var view = Titanium.UI.createView({
        height:400,
        width:400,
        backgroundColor:'#ccc',
        borderWidth:'2',
        borderColor:'#fff'
    });

    var label = Titanium.UI.createLabel({
        text: title,
        height:40,
        width:400,
        top:0,
        backgroundColor:'#333',
        color:'#fff',
        textAlign:'center'

    });

    view.add(new CloseButton());
    view.add(label);

    return view;
}