describe("EnlargedView", function() {

    title = "The Title";

    images = [];
    images.push('1.jpg');
    images.push('2.jpg');

    it('should create an enlarged view with the specified height, width and zIndex', function() {

        var view = new EnlargedView();

        view.height.should.be(720);
        view.width.should.be(720);
        view.backgroundColor.should.be('#ccc')
    });

    it('should contain a close button', function() {

        var view = new EnlargedView(title, images);
        var button = view.children[1];

        button.title.should.be("Close");
    });

    it('should contain a title', function() {

        var view = new EnlargedView(title, images);
        var label = view.children[2];

        label.text.should.be(title);
        label.top.should.be(0);
        label.height.should.be(70);
        label.width.should.be(720);
        label.top.should.be(0);
        label.backgroundColor.should.be('#333');
        label.color.should.be('#fff');
        label.textAlign.should.be('center');
    });

    it('should contain an image spinner', function() {

        var view = new EnlargedView(title, images);

        var spinner = view.children[0];

        spinner.image.should.be('1.jpg');
    });

});