function CoverFlowItem(itemName, theWindow) {

    var self = this;

    var defaultFolder = "coverflowitems/";
    var imgExtension = ".png";
    this.window = theWindow;
    this.name = itemName;

    this.asImage = function() {
        return defaultFolder + self.name + imgExtension;
    }

    this.getImageArray = function() {
        var fileList = new DirectoryReader(defaultFolder + self.name).getListOfImageFiles();
        var images = [];
        for(var img in fileList) {
            images.push(defaultFolder + itemName + "/" + fileList[img]);
        }
        return images;
    }

    this.hide = function() {
        self.currentView.hide();
        self.window.remove(self.currentView);
        createCurrentView();
    }

    function createCurrentView() {
        var view = Titanium.UI.createView({
            backgroundImage:self.asImage(),
            height:720,
            width:720,
            zIndex:1
        });
        view.hide();
        var animator = new Animator(view, null)
        animator.scale(0.56, 1, null);
        self.window.add(view);
        self.currentView = view;
    }

    function createEnlargedView() {
        self.enlargedView = new EnlargedView(self.name, self.getImageArray());
    }

    function setUp() {
        createCurrentView();
        createEnlargedView();
    }

    setUp();
}