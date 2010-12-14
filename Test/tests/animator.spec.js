describe("animator", function() {

    Ti = new TiStub();

    it("should do something", function() {

        var viewToAnimate = {
            animate:function(obj) {}
        };
        var view2 = {};

        var animator = new Animator(viewToAnimate, view2);

        viewToAnimate.should.receive('animate');

        animator.change();
        
    });

})