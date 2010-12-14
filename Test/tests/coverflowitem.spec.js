describe('CoverFlowItem', function() {

    defaultFolder = "coverflowitems/";
    imgExtension = ".png";

    it('should create a current view with the specified height, width and zIndex and add to window', function() {

        var itemName = "red";
        var expectedImageName = defaultFolder + itemName + imgExtension;

        var window = {
            add : function(){}
        }

        window.should.receive('add');

        var item = new CoverFlowItem(itemName, window);

        var view = item.currentView;
        view.backgroundImage.should.be(expectedImageName);
        view.height.should.be(400);
        view.width.should.be(400);
        view.zIndex.should.be(1);
    });

    it('should contain an enlarged view', function() {

        var itemName = "red";

        var window = {
            add : function(){}
        }

        var item = new CoverFlowItem(itemName, window);

        var view = item.enlargedView;
        view.height.should.be(400);
        view.width.should.be(400);
    });

    
});