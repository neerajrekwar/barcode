// javascript

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

document.getElementById("screen-fit").innerHTML = 'Screen: ' + myWidth + "x" + myHeight + ' px';
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//     function time(){
//     var d = new Date();
//     var s = d.getSeconds();
//     var m = d.getMinutes();
//     var h = d.getHours();
//     document.write(h + ":" + m + ":" + s);
// }

// setInterval(time,1000);

var randomPassword = function(length)
{
  chars = "!@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var pass = "";
  for(x=0;x<length;x++)
  {
    i = Math.floor(Math.random() * 62);
    pass += chars.charAt(i);
  }
  $("#output").text( pass );
}

$("button").on("click", function() {
  var length = $("input").val();
  if (length <= 0) {
    $("#output").show();
    $("#output").text("Enter a number more than 0.");
  }else{
    $("#output").show();
    randomPassword(length);
  }
  
});

$("#info").on("click", function() {
  $("#output").show("");
  $("#output").text("You can use the up and down arrow keys to change the value.");
});
