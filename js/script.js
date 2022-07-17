//
//
// setInterval(logoMovement, 3000);
//
// function logoMovement() {
//   const logoWidth = Math.trunc(Math.random()*200) + 1;
//   logoTag.style.width = logoWidth+"px";
//   console.log(logoWidth);
// };
//
//
//
// document.querySelector('p').addEventListener("click", function() {
//   document.querySelector('p').style.color = "#666";
// });


// Begrüßung
var halloTag = document.querySelector('p.hallo');
var wallTag = document.querySelector('div.wall');
window.onload = function() {
  const halloVw = Math.trunc(Math.random()*80) + 11;
  const halloVh = Math.trunc(Math.random()*80) + 11;
  halloTag.style.top = halloVh+"%";
  halloTag.style.left = halloVw+"%";
  const wallFarbe = Math.trunc(Math.random()*5) + 1;
  if (wallFarbe == 1) {
    wallTag.style.backgroundColor = "#FFE12E";
  }
  else if (wallFarbe == 2) {
    wallTag.style.backgroundColor = "#E55E8F";
  }
  else if (wallFarbe == 3) {
    wallTag.style.backgroundColor = "#537DF4";
  }
  else if (wallFarbe == 4) {
    wallTag.style.backgroundColor = "#A0D860";
  }
  else {
    wallTag.style.backgroundColor = "#8561D6";
  }
};

// Reload der Begrüsung
halloTag.addEventListener("click", function() {
  halloTag.style.display = "none";
  wallTag.style.display = "none";
  logoTag.style.display = "block";
  const wallFarbe = Math.trunc(Math.random()*5) + 1;
  if (wallFarbe == 1) {
    wallTag.style.backgroundColor = "#FFE12E";
  }
  else if (wallFarbe == 2) {
    wallTag.style.backgroundColor = "#E55E8F";
  }
  else if (wallFarbe == 3) {
    wallTag.style.backgroundColor = "#537DF4";
  }
  else if (wallFarbe == 4) {
    wallTag.style.backgroundColor = "#A0D860";
  }
  else {
    wallTag.style.backgroundColor = "#8561D6";
  }
});


var logoTag = document.querySelector('img.logo');
logoTag.addEventListener("click", function() {
  const halloVw = Math.trunc(Math.random()*80) + 11;
  const halloVh = Math.trunc(Math.random()*80) + 11;
  halloTag.style.display = "block";
  halloTag.style.top = halloVh+"%";
  halloTag.style.left = halloVw+"%";
  wallTag.style.display = "block";
  logoTag.style.display = "none";
});







// -------------- Malen auf Canvas Test

// // create canvas element and append it to document body
// var canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
//
// // some hotfixes... ( ≖_≖)
// document.body.style.margin = 0;
// canvas.style.position = 'fixed';
// // canvas.style.top = '0';
// // canvas.style.zIndex "-1";
//
// // get canvas 2D context and set him correct size
// var ctx = canvas.getContext('2d');
// resize();
//
// // last known position
// var pos = { x: 0, y: 0 };
//
// window.addEventListener('resize', resize);
// document.addEventListener('mousemove', draw);
// document.addEventListener('mousedown', setPosition);
// document.addEventListener('mouseenter', setPosition);
//
// // new position from mouse event
// function setPosition(e) {
//   pos.x = e.clientX;
//   pos.y = e.clientY;
// }
//
// // resize canvas
// function resize() {
//   ctx.canvas.width = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;
// }
//
// function draw(e) {
//   // mouse left button must be pressed
//   if (e.buttons !== 1) return;
//
//   ctx.beginPath(); // begin
//
//   ctx.lineWidth = 10;
//   ctx.lineCap = 'round';
//   ctx.strokeStyle = '#c0392b';
//
//   ctx.moveTo(pos.x, pos.y); // from
//   setPosition(e);
//   ctx.lineTo(pos.x, pos.y); // to
//
//   ctx.stroke(); // draw it!
// }
