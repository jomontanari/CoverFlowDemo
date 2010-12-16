describe('CloseButton', function() {

    Titanium = new TitaniumStub();

    it('should create a button aligned to the bottom', function() {

        var button = new CloseButton();

        button.title.should.be("Close");
        button.height.should.be(70);
        button.bottom.should.be(10);
        button.zIndex.should.be(100);
    });

    it('should have an event handler that scales the view', function() {

        var view = {
            show:function() {},
            animate:function() {}
        }

        var closed = false;

        closeCurrentView = function() {
            closed = true;
        }

        var button = new CloseButton(view);

        button.click();

        closed.should.be(true);
    });

});