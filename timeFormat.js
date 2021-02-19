function formatDuration(seconds) {
  // Complete this function
  //   seconds = seconds.toString();
  //   console.log(parseInt(seconds));
  seconds = Number(seconds);
  var years = Math.floor(seconds / 86400);
  var days = Math.floor();
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var sec = Math.floor((seconds % 3600) % 60);
  if (seconds > 3600 && seconds < 86400) {
    var hDisplay =
      hours > 0 ? hours + (hours == 1 ? " hour, " : " hours,") : "";
    var mDisplay =
      minutes > 0 ? minutes + (minutes == 1 ? " minute, " : " minutes") : "";
    var sDisplay = sec > 0 ? sec + (sec == 1 ? " second" : " seconds") : "";
    return `${hDisplay} ${mDisplay} ${sec > 0 ? +"and" + sec : ""}`;
  }

  if (seconds < 3600) {
  }

  if (minutes) {
    var mDisplay =
      minutes > 0 ? minutes + (minutes == 1 ? " minute, " : " minutes, ") : "";
    return mDisplay + sDisplay;
  }
  if (sec) {
    var sDisplay = sec > 0 ? sec + (sec == 1 ? " second" : " seconds") : "";
    return sDisplay;
  }
}

const result = formatDuration(66030);
console.log(result);

console.log(3600 / 60);
