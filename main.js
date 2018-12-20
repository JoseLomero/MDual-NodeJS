var mymodule = require('./mymodule.js') 
var filename = process.argv[2];
var extension = process.argv[3];

mymodule(filename, extension, function(err, list) {
    if (err) {
        console.log("error")
    }
    
    list.forEach(function (element) {
        console.log(element)
    });
})