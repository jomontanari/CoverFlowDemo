describe("animator", function() {

    Ti = new TiStub();
    Titanium = new TitaniumStub();

    it("should animate the first view when changing the view", function() {

        var newView;
        var viewToAnimate = {
            animate:function(obj) {newView=obj.view;}
        };

        var view2 = "a view";

        var animator = new Animator(viewToAnimate, view2);

        viewToAnimate.should.receive('animate');

        animator.change();
    
        newView.should.be(view2);
        
    });

    it('should scale the first view', function() {

        var viewToAnimate = {
            animate:function(obj) {},
            show:function(){}
        };

        var animator = new Animator(viewToAnimate, null);

        viewToAnimate.should.receive('animate');

        animator.scale(2, 10, null);

    });

    it('should scale and show the first view', function() {

        var viewToAnimate = {
            animate:function(obj) {},
            show:function(){}
        };

        var animator = new Animator(viewToAnimate, null);

        viewToAnimate.should.receive('show');
        viewToAnimate.should.receive('animate');

        animator.scaleAndShow(2, 10, null);

    });
})