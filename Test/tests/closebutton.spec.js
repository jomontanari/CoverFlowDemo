describe('CloseButton', function() {

    Titanium = new TitaniumStub();

    it('should create a button aligned to the bottom', function() {

        var button = new CloseButton();

        button.title.should.be("Close");
        button.height.should.be(40);
        button.bottom.should.be(60);
    });

    it('should have an event handler to close and restore the enlarged view', function() {

    });

});