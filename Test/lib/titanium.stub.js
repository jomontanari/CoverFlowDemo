function TitaniumStub() {
    this.UI = new UIStub();
    this.API = new APIStub();
}

function TiStub() {
    this.UI = new UIStub();
}

function APIStub() {
    this.info = function(msg){};
}

function UIStub() {
    this.iPhone = new iPhoneStub();
    this.createButton = function(obj) { return new ButtonStub(obj);}
    this.createView = function(obj) {return new ViewStub(obj);}
}

function ButtonStub(obj) {
    this.title = obj.title;
    this.height = obj.height;
    this.bottom = obj.bottom;
}

function ViewStub(obj) {
    var children = [];
    this.children = children;
    this.backgroundImage = obj.backgroundImage;
    this.height = obj.height;
    this.width = obj.width;
    this.zIndex = obj.zIndex;
    this.hidden = false;
    this.hide = function(){hidden=true};
    this.add = function(obj){children.push(obj)};
}

function iPhoneStub() {
    this.AnimationStyle = new AnimationStyleStub();
}

function AnimationStyleStub() {
    this.CURL_UP = 1;
}

var Ti = new TiStub();
