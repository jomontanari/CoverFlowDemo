describe("ImageSpinner", function() {

    it('should be an image view of the correct size', function() {

        var images = [];
        images.push('1.jpg');

        var view = new ImageSpinner(images);

        view.height.should.be(720);
        view.width.should.be(720);
    });

    it('should function without an image array', function() {

        var view = new ImageSpinner();

        view.height.should.be(720);
        view.width.should.be(720);

    });

    it('should have a default image', function() {

        var images = [];
        images.push('1.jpg');
        images.push('2.jpg');

        var view = new ImageSpinner(images);

        view.image.should.be('1.jpg');
    });

    it('should animate to the next image on click', function() {

    });

    it('should animate to the first image after the last one', function() {

    });

})