const fs = require('fs');
const path = require('path');

const pathFilesStream = path.resolve(__dirname, 'input.txt');

const readableStream = fs.createReadStream(pathFilesStream, {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(path.resolve(__dirname) + '/output.txt');

readableStream.on('readable', () => {
    try {
        const text = `${readableStream.read()}`;
        writableStream.write(`${text} \n`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
    writableStream.end();
});
