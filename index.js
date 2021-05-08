import fs from 'fs';
import { pipeline } from 'stream';
import parseArguments from './parseArguments.js';
import transformStream from "./transformStream.js";

const options = parseArguments(process.argv)

const inputStream = options.input ? fs.createReadStream(options.input) : process.stdin;
const outputStream = options.output ? fs.createWriteStream(options.output, {flags:'a'}) : process.stdout;

pipeline(
    inputStream.setEncoding('utf8'), // input file stream or stdin stream
    transformStream(options), // Transform stream
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
