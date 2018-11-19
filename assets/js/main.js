const logo = document.querySelector('.navbar-brand');
const navbar = document.querySelector('.navbar').addEventListener('mouseover', function (e) {
    if (e.target.id === 'toggle') {
        logo.innerHTML = '';
        logo.innerHTML = `<img src="assets/images/logo.png" id="toggle" width="40" alt="Logo">`;
    } else {
        logo.innerHTML = '';
        logo.innerHTML = `<img src="assets/images/logowhite.png" id="toggle" width="40" alt="Logo">`;
    }
});

function openp(pglnk) {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("sponsors").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById(pglnk).style.display = "block";
}

var end = new Date('01/25/2019');
var _day = 1000 * 60 * 60 * 24;
var timer;
function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'You are here';

        return;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').innerHTML = days + ' days to go';
}
timer = setInterval(showRemaining, 1000);