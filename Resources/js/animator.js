function Animator(viewToAnimate, viewToChangeTo) {
    var self = this;
    var view = viewToAnimate;
    var secondView = viewToChangeTo;

    this.scaleAndShow = function(scaleFactor, millisecondsDuration, callback) {
        view.show();
        this.scale(scaleFactor, millisecondsDuration, callback);
    }
    
    this.scale = function(scaleFactor, millisecondsDuration, callback) {

        var t = Titanium.UI.create2DMatrix().scale(scaleFactor);
        var transformAnimation = Titanium.UI.createAnimation({transform:t,duration:millisecondsDuration});

        transformAnimation.addEventListener("complete", function(e) {
            if (callback != null) callback(e);
        });

        view.animate(transformAnimation);
    }


    this.change = function() {
        view.animate({view:secondView,transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
    }
}