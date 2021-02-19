function orderWeight(string) {
  // your code
  string = string.split(" ");
  let final;
  let res = string.map((el, i) => {
    // el = Number(el);
    final = el.split("").reduce((accumulator, currentValue) => {
      return Number(accumulator) + Number(currentValue);
    }, 0);
    return final;
  });
  return res
    .sort((a, b) => {
      return a - b;
    })
    .join(" ");
}

const res = orderWeight("10011 192 8643 837 2000");
console.log(res);

/**
 * 
 * function orderWeight(strng) {
 const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
  function comp(a,b){
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
   };
 return strng.split(' ').sort(comp).join(' ');
}




function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {  
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key 
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}



function digitSum(str) {
  return str.split('').reduce(function(s, e) { 
    return s + parseInt(e); 
  }, 0);
}

function orderWeight(str) {
    return str.split(' ').sort(function(a, b) {
      return digitSum(a) - digitSum(b) || a.localeCompare(b);
    }).join(' ');
}


function orderWeight(str) {
  const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
  return str.split(' ').sort((a, b) => {
    const diff = sum(a) - sum(b);
    return diff == 0 ? (a > b ? 1 : -1) : diff;
  }).join(' ');
}

 */
