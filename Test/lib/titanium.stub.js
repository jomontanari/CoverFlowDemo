function TitaniumStub() {
    this.UI = new UIStub();
}

function TiStub() {
    this.UI = new UIStub();
}

function ButtonStub(obj) {
    this.title = obj.title;
    this.height = obj.height;
    this.bottom = obj.bottom;
}

function UIStub() {
    this.iPhone = new iPhoneStub();
    this.createButton = function(obj) { return new ButtonStub(obj);}
}

function iPhoneStub() {
    this.AnimationStyle = new AnimationStyleStub();
}

function AnimationStyleStub() {
    this.CURL_UP = 1;
}

var Ti = new TiStub();
