// draw background color
module.exports = (color) => {

  let c=document.getElementById("main-window");
  c.style.width = window.innerWidth;
  c.style.height = window.innerHeight - 50;
  let ctx=c.getContext("2d");
  ctx.fillStyle=color;
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fill();

}
