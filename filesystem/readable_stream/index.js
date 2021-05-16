const fs = require('fs');
const path = require('path');

// [Readable Stream Part] //
// Get Specific Path
const pathFilesStream = path.resolve(__dirname, 'article.txt');
//console.log(__dirname);

const readableStream = fs.createReadStream(pathFilesStream, {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});