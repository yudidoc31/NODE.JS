// core module
// file system
const fs = require('fs')

fs.readFile('test.txt','utf-8', (err,data) => {
    if (err) throw err;
    console.log(data)

});

// membaca txt di terminal