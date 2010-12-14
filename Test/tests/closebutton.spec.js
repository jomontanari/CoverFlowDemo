describe('CloseButton', function() {

    Titanium = new TitaniumStub();

    it('should create a button aligned to the bottom', function() {

        var button = new CloseButton().create();

        button.title.should.be("Close");
        button.height.should.be(40);
        button.bottom.should.be(0);
    });

});