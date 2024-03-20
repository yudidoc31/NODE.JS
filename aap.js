// core module
// file system
const fs = require('fs');
const text = "contoh teks"

// menuliskan string ke file (Synchoronous)
fs.writeFileSync('test.txt','Hello World text syncoronous!');

// menulis txt