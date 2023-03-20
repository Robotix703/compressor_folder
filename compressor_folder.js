import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputFolder = process.argv[2];
const outputFolder = process.argv[3];
console.log("Input folder : " + inputFolder);
console.log("Output folder : " + outputFolder);

//Compress
fs.readdir(inputFolder, (err, files) => {
    if (err || files.length === 0) {
        console.log(err);
        return;
    }
    console.log("Nb file : " + files.length);

    files.forEach(function (file) {
        console.log("File : " + file);

        sharp(path.join(inputFolder, file))
            .jpeg({quality: 50})
            .toFile(path.join(outputFolder, file), (err, info) => { 
                if (err) {
                    console.log(err);
                }
            });
    });
});