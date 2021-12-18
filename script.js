
function time() {
    const dateSetup = new Date();
    var hours = dateSetup.getHours();
    var minutes = dateSetup.getMinutes();
    var seconds = dateSetup.getSeconds();
    var ampm = hours >=12 ? 'PM' : 'AM';
    hours = hours % 12;
    var dateLive = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("date-time").innerHTML = dateLive;
    setTimeout(time, 1000);
}

time();


