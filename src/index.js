const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let message = expr.split("**********");
   index = 0;
   let result = "";
   for (let i = 0; i < message.length; ++i){
     let char = "";
     while(message[i] !== ""){
       char = "";
       let letter = message[i].substring(0, 10);
       message[i] = message[i].replace(letter,"");
       for (let j = 0; j < letter.length; j += 2){
         if (letter[j] + letter[j + 1] === "10"){
           char = char + '.';
         } else if (letter[j] + letter[j + 1] === "11"){
          char = char + '-';
         }
       }
       result = result + MORSE_TABLE[char];
     }
     result = result + " ";
   }
   return result.trim();
}

module.exports = {
    decode
}