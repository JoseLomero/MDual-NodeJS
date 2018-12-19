var fs = require('fs')

var filename = process.argv[2]
var buf = fs.readFileSync(filename)
var str = buf.toString();
var count = Number(str.split('\n').length) -1

console.log(count)