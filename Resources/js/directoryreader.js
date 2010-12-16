function DirectoryReader(directoryName) {
    var name = directoryName;

    this.getListOfImageFiles = function() {
        var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory + "/" + directoryName);
        return dir.getDirectoryListing();
    };
}