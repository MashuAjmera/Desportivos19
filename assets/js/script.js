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
    document.getElementById("reach").style.display = "none";
    // document.getElementById("containerinfo").style.display = "none";
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



var value2 = 0;
function countfootfall() {
  if (value2 < 2000) {
    value2 += 5;
  }
 document.getElementById('counterfootfall').innerHTML = value2+"+";
 setTimeout(countfootfall, 1);
}
var value3 = 0;
function countcolleges() {
  if (value3 < 100) {
    value3 += 1;
    document.getElementById('countercolleges').innerHTML = value3+"+";
  }
 setTimeout(countcolleges, 20);
}
var value1 = 0;
function countevent() {
  if (value1 < 20) {
    value1 += 1;
    document.getElementById('counterevents').innerHTML = value1+"+";
  }
setTimeout(countevent, 100);
}

setTimeout(function(){
    document.getElementById('loader').style.display="none";
    document.getElementById('webp').style.display="block";
},000);