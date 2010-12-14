load('Test/lib/env.rhino.1.2.js',
        'Test/lib/jspec/jspec.js',
        'Test/lib/jspec/jspec.xhr.js',
        'Test/lib/jquery.js',
        'Test/lib/jspec/jspec.jquery.js',
        'Test/lib/formatters.js',
        'Test/lib/loadFiles.js',
        'Test/lib/titanium.stub.js');

var testDirectoryPath = arguments[0];
var srcDirectoryPath = arguments[1];

var srcFiles = getFiles(srcDirectoryPath);
jQuery.each(srcFiles, function(index, model) {
    load(model);
});

function runTestSuite(testSuite) {
    JSpec.exec(testSuite);

}
;

var tests = getFiles(testDirectoryPath);
jQuery.each(tests, function(index, test) {
    if (isJavaScriptFile(test.getName())) {
        runTestSuite(test);
    }
});

var resultsFilePath = arguments[2]

JSpec

        .run({reporter:function(results, options) {
//            JSpec.reporters.jUnit(results, options);
            JSpec.reporters.Terminal(results, options);
        }})
        .report()