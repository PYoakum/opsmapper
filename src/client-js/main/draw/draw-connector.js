let convertGrid = require('convert-to-grid');

module.exports = (coords, color, _width, sectionWidth, sectionLength, tileWidth, tileLength, offsetX, offsetY) => {

    let c=document.getElementById("main-window");
    let ctx=c.getContext("2d");
    ctx.strokeStyle=color;
    ctx.lineWidth= _width;
    ctx.beginPath();
    ctx.moveTo(
      convertGrid(coords[0].x, coords[0].y, sectionWidth, sectionLength, tileWidth, tileLength,offsetX, offsetY).x,
      convertGrid(coords[0].x, coords[0].y, sectionWidth, sectionLength, tileWidth, tileLength,offsetX, offsetY).y
    )
    for(let i=1;i<coords.length;i++){
      ctx.lineTo(
        convertGrid(
          coords[i].x,
          coords[i].y,
          sectionWidth,
          sectionLength,
          tileWidth,
          tileLength,
          offsetX,
          offsetY
        ).x,
        convertGrid(
          coords[i].x,
          coords[i].y,
          sectionWidth,
          sectionLength,
          tileWidth,
          tileLength,
          offsetX,
          offsetY
        ).y
      )
    }
    ctx.stroke();
}
