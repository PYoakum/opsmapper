module.exports = (x,y,color,w,h) => {
    var c=document.getElementById("main-window");
    var ctx=c.getContext("2d");
    ctx.fillStyle=color;
    ctx.beginPath()
    ctx.moveTo(x,y+((h/2)+h));
    ctx.lineTo(x-(w/2),y+h);
    ctx.lineTo(x-(w/2),y);
    ctx.lineTo(x,y-(h/2));
    ctx.lineTo(x+(w/2),y);
    ctx.lineTo(x+(w/2),y+h);
    ctx.lineTo(x,y+(h/2)+h);
    ctx.fill()

    // lighten left side
    ctx.fillStyle='rgba(255,255,255,0.3)';
    ctx.beginPath()
    ctx.moveTo(x,y+((h/2)+h));
    ctx.lineTo(x-(w/2),y+h);
    ctx.lineTo(x-(w/2),y);
    ctx.lineTo(x,y+(h/2));
    ctx.lineTo(x,y+((h/2)+h));
    ctx.fill();

    // darken right side
    ctx.fillStyle='rgba(0,0,0,0.3)';
    ctx.beginPath()
    ctx.moveTo(x,y+((h/2)+h));
    ctx.lineTo(x+(w/2),y+h);
    ctx.lineTo(x+(w/2),y);
    ctx.lineTo(x,y+(h/2));
    ctx.lineTo(x,y+((h/2)+h));
    ctx.fill();
}
