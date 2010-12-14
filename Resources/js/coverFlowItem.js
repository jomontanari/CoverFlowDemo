function CoverFlowItem(itemName, theWindow) {

    var self = this;

    var defaultFolder = "coverflowitems/";
    var imgExtension = ".png";
    this.window = theWindow;
    this.name = itemName;

    this.asImage = function() {
        return defaultFolder + self.name + imgExtension;
    }

    function createCurrentView() {
        var view = Titanium.UI.createView({
            backgroundImage:self.asImage(),
            height:400,
            width:400,
            zIndex:1
        });
        view.hide();
        self.window.add(view);
        self.currentView = view;
        Titanium.API.info(self.window);
    }

    function createEnlargedView() {
        var view = Titanium.UI.createView({
            height:650,
            width:650
        })

        var button = Titanium.UI.createButton({title:"Close",height:40});

        view.add(button);

        self.enlargedView = view;
    }

    function setUp() {
        createCurrentView();
        createEnlargedView();
    }

    setUp();
}