// javascript

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

  document.getElementById("screen-fit").innerHTML =
    "Screen: " + myWidth + "x" + myHeight + " px";
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let btncp = document.getElementById("btncp");

function generatePass() {
  let chars =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
  let passLength = document.getElementById('length-pass');
  let password = "";

  for (let i = 0; i < passLength; i++)
    password += chars[Math.floor(Math.random() * chars.length)];

  return password;
}
btn.addEventListener("click", () => {
  pass.value = generatePass();
});

btncp.addEventListener("click", () => {
  if (pass.value != "") {
    navigator.clipboard.writeText(pass.value);
    pass.classList.add("active");
    setTimeout(() => {
      pass.classList.remove("active");
    }, 1000);
  }
});

