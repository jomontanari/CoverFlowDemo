importClass(java.io.File);

function isJavaScriptFile(fileName) {
    fileExtension = fileName.substring(fileName.lastIndexOf('.'));
    return (fileExtension == ".js");
}

function getFiles(directoryPath) {
    var dir = new File(directoryPath);
    return dir.listFiles();
}

