const caesarCipher = (str, shift) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    while (shift < 26) {
        shift = shift + 26;
    }
    while (shift > 26) {
        shift = shift - 26;
    }
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i],
            isUpper = char === char.toUpperCase();

        char = char.toLowerCase();

        if (alphabet.indexOf(char) > -1) {
            let newIndex = alphabet.indexOf(char) + shift;
            if (newIndex<0) {newIndex = newIndex + alphabet.length;}
            if(newIndex < alphabet.length) {
                isUpper ? newStr += alphabet[newIndex].toUpperCase() : newStr += alphabet[newIndex];
            } else {
                let shiftedIndex = -(alphabet.length - newIndex);
                isUpper ? newStr += alphabet[shiftedIndex].toUpperCase() : newStr += alphabet[shiftedIndex];
            }
        } else {
            newStr += char;
        }
    }
    return newStr;
}

export default caesarCipher;
