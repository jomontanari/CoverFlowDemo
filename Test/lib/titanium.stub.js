function TitaniumStub() {

}

function TiStub() {
    this.UI = new UIStub();
}

function UIStub() {
    this.iPhone = new iPhoneStub();
}

function iPhoneStub() {
    this.AnimationStyle = new AnimationStyleStub();
}

function AnimationStyleStub() {
    this.CURL_UP = 1;
}

var Ti = new TiStub();
