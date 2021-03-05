// function domainName(url) {
//   //your code here
//   let start;
//   if (url.startsWith("www.")) {
//     start = url.indexOf("www.") + 4;
//     return url.slice(start, url.indexOf(".com"));
//   }
//   if (/www./g.test(url)) {
//     start = url.indexOf("www.") + 4;
//     return url.slice(start, url.indexOf(".com"));
//   }
//   start = url.indexOf("//") + 2;
//   return url.slice(start, url.indexOf(".com"));
// }

/*
function domainName(url){
  //your code here
  if(url.indexOf('www')>-1) return url.split('.')[1]
  if(url.indexOf('//')>-1) return url.split('//')[1].split('.')[0]
  return url.split('.')[0]
}

function domainName(url) {
  return url
    .replace(/http[s]?:\/\//, "")
    .replace(/www./, "")
    .split(".")[0];
}
*/

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

const res = domainName("https://www.zombie-bites.com");
console.log(res);
