let _grid = require('convert-to-grid')

module.exports = (text, color, x, y, sectionWidth, sectionLength, tileWidth, tileLength, offsetX, offsetY) => {
   let c=document.getElementById("main-window");
   let ctx=c.getContext("2d");

    ctx.fillStyle = color;
    ctx.font = "12px Arial";
    ctx.fillText(
      "test",
       _grid(x,y,sectionWidth,sectionLength,tileWidth,tileLength,offsetX,offsetY).x,
       _grid(x,y,sectionWidth,sectionLength,tileWidth,tileLength,offsetX,offsetY).y
     )
}
