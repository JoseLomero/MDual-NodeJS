var fs = require('fs')
var filename = process.argv[2]

function count() {
    fs.readFile(filename, function callback(err, data) {
        var str = data.toString();
        var resultado = Number(str.split('\n').length) - 1
        console.log(resultado)
    })
}

count()