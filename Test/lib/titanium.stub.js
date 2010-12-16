function TitaniumStub() {
    this.UI = new UIStub();
    this.API = new APIStub();
    this.Filesystem = new FileSystemStub();
}

function TiStub() {
    this.UI = new UIStub();
    this.API = new APIStub();
}

function APIStub() {
    this.info = function(msg) {
    };
}

function UIStub() {
    this.iPhone = new iPhoneStub();
    this.createButton = function(obj) {
        return new ObjectStub(obj);
    }
    this.createImageView = function(obj) {
        return new ObjectStub(obj);
    }
    this.createLabel = function(obj) {
        return new ObjectStub(obj)
    }
    this.createView = function(obj) {
        return new ObjectStub(obj);
    }
    this.create2DMatrix = function() {
        return new ObjectStub();
    }
    this.createAnimation = function(obj) {
        return new ObjectStub(obj);
    }
}

function FileSystemStub() {
    this.getFile = function() {
        return new FileStub()
    };
    this.resourcesDirectory = "Resources";
}

function FileStub() {
    this.getDirectoryListing = function() {
        var files = [];
        files.push("file1");
        return files;
    }
}


function ObjectStub(obj) {

    if (obj != null) {
        this.backgroundColor = obj.backgroundColor;
        this.backgroundImage = obj.backgroundImage;
        this.bottom = obj.bottom;
        this.color = obj.color;
        this.height = obj.height;
        this.hidden = false;
        this.image = obj.image;
        this.text = obj.text;
        this.textAlign = obj.textAlign;
        this.title = obj.title;
        this.top = obj.top;
        this.width = obj.width;
        this.zIndex = obj.zIndex;
    }

    this.hide = function() {
        hidden = true
    };
    this.addEventListener = function(event, callback) {
        if (event == "click") {
            this.click = callback;
        }
    };

    var children = [];
    this.children = children;
    this.add = function(obj) {
        children.push(obj)
    };
    this.scale = function(scaleFactor) {
        this.scaleFactor = scaleFactor;
    }

    this.animate = function() {};
}

function iPhoneStub() {
    this.AnimationStyle = new AnimationStyleStub();
}

function AnimationStyleStub() {
    this.CURL_UP = 1;
}

var Ti = new TiStub();
