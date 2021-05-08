import commander, {program} from "commander";
import fs from 'fs';

const parseShift = (value) => {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
        throw new commander.InvalidOptionArgumentError('Not a number.');
    }
    return parsedValue;
}

const parsePath = (path, permission) => {
    try {
        fs.accessSync(path, permission);
        if (!fs.lstatSync(path).isFile()) {
            throw Error();
        }
        return path;
    }
    catch (err) {
        throw Error(`"${path}" file doesn't exist or not accessible, please ensure that path is correct`);
    }
}

const parseArguments = (args)=>{
    program
        .requiredOption('-s, --shift <string>', 'a shift', parseShift)
        .option('-i, --input <letters...>', 'an input file', (inputPath)=>parsePath(inputPath, fs.constants.R_OK))
        .option('-o, --output <output>', 'an output file', (inputPath)=>parsePath(inputPath, fs.constants.W_OK))
        .addOption(new commander.Option('-a, --action <action>', 'an action encode/decode').choices(['encode', 'decode']).makeOptionMandatory())

    program.parse(args);

    return program.opts();
}

export default parseArguments;