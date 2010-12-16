Titanium.include("js/coverFlowItems.js");
Titanium.include("js/coverFlowItem.js");
Titanium.include("js/animator.js");
Titanium.include("js/closebutton.js");
Titanium.include("js/enlargedview.js");
Titanium.include("js/directoryreader.js");
Titanium.include("js/imagespinner.js");

var mainWindow = Titanium.UI.createWindow({
    backgroundColor:'#000'
});

var coverFlowItems = new CoverFlowItems();
coverFlowItems.add("white", mainWindow);
coverFlowItems.add("blue", mainWindow);
coverFlowItems.add("red", mainWindow);
coverFlowItems.add("orange", mainWindow);
coverFlowItems.add("purple", mainWindow);

var coverFlow = Titanium.UI.createCoverFlowView({
    images:coverFlowItems.asImages(),
    backgroundColor:'#000',
    zIndex:0
});

var currentItem = null;

coverFlow.addEventListener('click', function(e) {
    var clickedItem = coverFlowItems.getItem(e.index);
    var animator = new Animator(clickedItem.currentView, clickedItem.enlargedView);
    animator.scaleAndShow(1, 500, animator.change);
    currentItem = clickedItem;
});

function closeCurrentView() {
    var animator = new Animator(currentItem.currentView);
    animator.scale(0.56, 500, currentItem.hide);
}

mainWindow.add(coverFlow);
mainWindow.open();