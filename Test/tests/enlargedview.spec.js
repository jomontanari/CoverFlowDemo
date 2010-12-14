describe("EnlargedView", function() {

    it('should create an enlarged view with the specified height, width and zIndex', function() {

        var view = new EnlargedView();

        view.height.should.be(400);
        view.width.should.be(400);
    });

    it('should contain a close button', function() {

        var view = new EnlargedView();
        var button = view.children[0];

        button.title.should.be("Close");
    });

    it('should contain a title', function() {

        var title = "The Title"
        var view = new EnlargedView(title);
        var label = view.children[1];

        label.text.should.be(title);
        label.top.should.be(0);
        label.height.should.be(40);
        label.width.should.be(400);
        label.top.should.be(0);
        label.backgroundColor.should.be('#333');
        label.color.should.be('#fff');
        label.textAlign.should.be('center');
    });

    it('should contain an image spinner', function() {

    });

});