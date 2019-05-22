module.export = (x,y,color,width,height,outlineWidth) => {

    let w = width;
    let h = height;
    let c=document.getElementById("main-window");
    let ctx=c.getContext("2d");

    ctx.strokeStyle=color;
    ctx.lineWidth=outlineWidth;
    ctx.beginPath()
    ctx.moveTo(x,y+(h/2));
    ctx.lineTo(x-(w/2),y);
    ctx.lineTo(x,y-(h/2));
    ctx.lineTo(x+(w/2),y);
    ctx.lineTo(x,y+(h/2));
    ctx.stroke();

}
