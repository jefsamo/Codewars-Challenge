function toWeirdCase(string) {
  //TODO
  let res;
  //   string = string.replace(/ /g, "").split("");
  if (/\s/.test(string)) {
    // It has any kind of whitespace
    string = string.split(" ");
    res = string.map((el) => {
      el = el.split("");
      let final = el.map((element, i) => {
        return i % 2 === 0 ? element.toUpperCase() : element.toLowerCase();
      });
      return final.join("");
    });
    return res.join(" ");
  } else {
    string = string.split("");
    res = string.map((el, i) => {
      return i % 2 === 0 ? el.toUpperCase() : el.toLowerCase();
    });

    return res.join("");
  }
}
740012;

const result = toWeirdCase("stri");
console.log(result);

/**
 
 function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

function toWeirdCase(string){
  var str = '';
  var counter = 0;
  
  for(var i = 0; i < string.length; i++) {
    if(string[i] === ' ') {
      str += ' ';
      counter = 0;
    } else if(counter % 2 === 0) {
      str += string[i].toUpperCase();
      counter++;
    } else if(counter % 2 !== 0) {
      str += string[i].toLowerCase();
      counter++;
    }
  }
  return str;
};


function toWeirdCase(string) {

    function singleWeird(e) {
        var word = e.split('');
        for (var i = 0; i < word.length; i += 2) {
            word[i] = word[i].toUpperCase();
        }
        return word.join('');
    }

    return string.split(' ').map(function (e) {
        return singleWeird(e);
    }).join(' ');
}
 
 */
