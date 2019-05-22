module.exports = (x,y,color,width,height) => {
    let h = height;
    let w = width;
    let c=document.getElementById("main-window");
    let ctx=c.getContext("2d");
    ctx.fillStyle=color;
    ctx.strokeStyle=color;
    ctx.lineWidth=0.5;
    ctx.beginPath()
    ctx.moveTo(x,y+(h/2));
    ctx.lineTo(x-(w/2),y);
    ctx.lineTo(x,y-(h/2));
    ctx.lineTo(x+(w/2),y);
    ctx.lineTo(x,y+(h/2));
    ctx.fill();
    ctx.stroke();
}
