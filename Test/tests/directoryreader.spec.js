describe("DirectoryReader", function() {

    it('should list all of the files in a specified directory', function() {

        var dirName = "test";
        var dir = new DirectoryReader(dirName);

        var listOfFiles = dir.getListOfImageFiles();

        listOfFiles.length.should.be(1);

    });
})