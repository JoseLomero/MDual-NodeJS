var fs = require('fs');
var path = require('path');
var filename = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(filename, function callback (err, list) {
    list.forEach(function (element) {
        if (path.extname(element) == extension) {
            console.log(element)
        }
    });
});