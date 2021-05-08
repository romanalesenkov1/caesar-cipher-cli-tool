import fs from 'fs';
import { Transform, pipeline } from 'stream';
import parseArguments from './parseArguments.js';
import caesarCipher from "./caesarCipher.js";

const options = parseArguments(process.argv)

const inputStream = options.input ? fs.createReadStream(options.input) : process.stdin;
const outputStream = options.output ? fs.createWriteStream(options.output, {flags:'a'}) : process.stdout;
const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            let updatedShift = options.action === 'decode' ? -options.shift : options.shift;
            let updatedChunk = caesarCipher(chunk.toString(), updatedShift);
            callback(null, updatedChunk);
        }
    });

pipeline(
    inputStream.setEncoding('utf8'), // input file stream or stdin stream
    transformStream, // Transform stream
    outputStream, // output file stream or stdout stream
 (err) => {
            if (err) {
                process.exit(1)
                console.error('Failure', err);
            } else {
                console.log('Success');
            }
    }
)
