# Task 1. caesar-cipher-cli-tool 

## Description
**CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).**

## Installation
    npm install

## Run the tool
    index.js [options]

## Options
CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift  
    *required*; accepts integer value;
2.  **-i, --input**: an input file  
    *optional*; if not set, then process.stdin used as an input
3.  **-o, --output**: an output file  
    *optional*; if not set, then process.stdout used as an output
4.  **-a, --action**: an action encode/decode  
    *required*; only `encode` or `decode` values are available;

## Usage examples
1. _-a (--action)_ is **encode**

```bash
$ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node index.js --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
   _Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node index.js --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _-i (--input)_ and _-o (--output)_ aren't set

```bash
$ node index.js --action encode --shift 1
```

> process.stdin
> `abc`

> process.stdout
> `bcd`

4. _Negative shift handling_

```bash
$ node index.js --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`
