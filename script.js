// javascript

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

document.getElementById("screen-fit").innerHTML = 'Screen: ' + myWidth + "x" + myHeight + ' px';
}