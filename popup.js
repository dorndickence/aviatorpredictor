function getCurrentTime() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var currentTime = hour + ":" + minutes + ":" + seconds;
    return currentTime;
  }
  function updateClock() {
    var currentTime = getCurrentTime();
    $("#clock").text(currentTime);
    setTimeout(updateClock, 1000);
  }