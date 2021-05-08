import {Transform} from "stream";
import caesarCipher from "./caesarCipher.js";


const transformStream = (options) => new Transform({
    transform(chunk, encoding, callback) {
        let updatedShift = options.action === 'decode' ? -options.shift : options.shift;
        let updatedChunk = caesarCipher(chunk.toString(), updatedShift);
        callback(null, updatedChunk);
    }
});

export default transformStream;