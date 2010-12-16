describe('CoverFlowItem', function() {

    defaultFolder = "coverflowitems/";
    imgExtension = ".png";


    it('should create a current view with the specified height, width and zIndex and add to window', function() {

        var itemName = "red";
        var expectedImageName = defaultFolder + itemName + imgExtension;

        var window = {
            add : function() {
            }
        }

        window.should.receive('add');

        var item = new CoverFlowItem(itemName, window);

        var view = item.currentView;
        view.backgroundImage.should.be(expectedImageName);
        view.height.should.be(720);
        view.width.should.be(720);
        view.zIndex.should.be(1);
    });

    it('should contain an enlarged view', function() {

        var window = {
            add : function() {
            }
        }
        var itemName = "red";

        var item = new CoverFlowItem(itemName, window);

        var view = item.enlargedView;
        view.height.should.be(720);
        view.width.should.be(720);
    });

    it('should get an array of images and prefix them with the correct directory name', function() {

        var window = {
            add : function() {
            }
        }
        var itemName = "blue";

        var item = new CoverFlowItem(itemName, window);

        var images = item.getImageArray();

        images.length.should.be(1);

        var image = images[0];

        image.should.be(defaultFolder + itemName + "/file1");

    });

    it('should hide and recreate the current view', function() {

    });

});