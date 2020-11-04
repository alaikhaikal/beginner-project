var showCurrentTime = function() {
        var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    var clockTime = hours + ' : ' + minute + ' : ' + second;

    clock.innerText = clockTime;
}

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);
