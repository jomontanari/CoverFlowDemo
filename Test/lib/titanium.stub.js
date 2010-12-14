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
    this.createButton = function(obj) { return new ObjectStub(obj);}
    this.createView = function(obj) {return new ObjectStub(obj);}
    this.createLabel = function(obj) {return new ObjectStub(obj)}
}

function ObjectStub(obj) {
    
    this.backgroundImage = obj.backgroundImage;
    this.height = obj.height;
    this.width = obj.width;
    this.zIndex = obj.zIndex;
    this.hidden = false;
    this.title = obj.title;
    this.height = obj.height;
    this.bottom = obj.bottom;
    this.top = obj.top;
    this.text = obj.text;
    this.backgroundColor = obj.backgroundColor;
    this.color = obj.color;
    this.textAlign = obj.textAlign;

    this.hide = function(){hidden=true};

    var children = [];
    this.children = children;
    this.add = function(obj){children.push(obj)};
}

function iPhoneStub() {
    this.AnimationStyle = new AnimationStyleStub();
}

function AnimationStyleStub() {
    this.CURL_UP = 1;
}

var Ti = new TiStub();
