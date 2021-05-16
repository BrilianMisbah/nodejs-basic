const fs = require('fs');
const path = require('path');

// [Filesystem Part] //
// Asyncronous Callback
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
// Get Specific Path
const pathFiles = path.resolve(__dirname, 'notes.txt');
//console.log(pathFiles);

// Run Asyncronous
fs.readFile(pathFiles, 'UTF-8', fileReadCallback);

// Run Syncronous
const data = fs.readFileSync(pathFiles, 'UTF-8');
console.log(data);