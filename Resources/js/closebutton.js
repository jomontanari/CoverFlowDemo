function CloseButton() {

    this.create = function() {
        var button = Titanium.UI.createButton({
            title:"Close",
            height:40,
            bottom:0
        });
        return button;
    }

}