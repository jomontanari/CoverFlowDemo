function CloseButton(viewToControl) {
    var view = viewToControl;

    var button = Titanium.UI.createButton({
        title:"Close",
        height:70,
        width:500,
        bottom:10,
        zIndex:100
    });

    button.font = {fontSize:25}

    button.addEventListener('click', function(e) {
        closeCurrentView();
    });

    function hideView() {
//        view.hide();
    }


    return button;
}