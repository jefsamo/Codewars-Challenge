function isPagram(sentence) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  sentence = sentence.toLowerCase();
  return alphabets.every((x) => sentence.includes(x));
}

// function isPangram(str){
//     var alphabet = ['a', 'b', 'c', 'd', 'e',
//            'f', 'g', 'h', 'i', 'j',
//            'l', 'm', 'n', 'o', 'p',
//            'q', 'r', 's', 't', 'u',
//            'v', 'w', 'x', 'y', 'z'
//          ];
//          str=str.toLowerCase();
//          for (var i = 0; i < alphabet.length; i++) {
//              if (str.indexOf(alphabet[i])<0) {
//                return false;
//              }
//          }
//          return true
//    }
console.log(isPagram("The quick brown fox jumps over the lazy dog"));
