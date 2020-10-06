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
    let arr = [];
    let arrTwo = [];
    
let code =[]
    arr = expr.match(/.{1,10}/g);

    for(let i = 0; i < arr.lengt; i++){
        if(arr[i] === '**********') continue
        arr[i] = +arr[i];
        arr[i]= arr[i].toString()
    }

    for(let j = 0; j< arr.length; j++){
        if(arr[j] === '**********'){
           arrTwo[j] = ['**********'] 
           continue;
        }
         arrTwo[j] = arr[j].match(/.{1,2}/g)
       }

       for(let a = 0; a < arrTwo.length; a++){
        for(let b = 0; b < arrTwo[a].length; b++){
          if(arrTwo[a][b] === '10'){
            code.push('.')
          } else if(arrTwo[a][b] === '11'){
             code.push('-')
          } else if(arrTwo[a][b] === '**********'){
             code.push('+')
          }
          
        }
        code.push(' ')
      }
      code = code.join('').split(' ');

      for(var key in MORSE_TABLE){
        for(let c = 0; c< code.length; c ++){
          if(code[c] === key){
            code[c] = MORSE_TABLE[key]
          } else if(code[c] === '+'){
            code[c] = ' ';
          }
        }
      }
      
      return code.join('');
}

module.exports = {
    decode
}