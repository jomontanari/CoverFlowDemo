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
        self.enlargedView = new EnlargedView(self.name);
    }

    function setUp() {
        createCurrentView();
        createEnlargedView();
    }

    setUp();
}