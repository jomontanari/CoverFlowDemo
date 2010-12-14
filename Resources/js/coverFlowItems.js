function CoverFlowItems() {

    var items = [];

    this.add = function(name, window) {
        var newItem = new CoverFlowItem(name, window);
        items.push(newItem);
    };

    this.asImages = function() {
        var images = [];
        for (index in items) {
            images.push(items[index].asImage());
        }
        return images;
    };

    this.getItem = function(index) {
        return items[index];
    };
}