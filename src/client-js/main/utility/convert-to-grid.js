// convert x,y from canvas to "grid coordinates"
module.exports = (x, y, sectionWidth, sectionLength, tileWidth, tileLength, offsetX, offsetY) => {
    let baseX = (offsetX)*(tileWidth);
    let baseY = (offsetY)*(tileLength);
    let X = baseX + (y - x) * (tileWidth/2);
    let Y = baseY + (y + x) * (tileLength/2);
    return {
      'x': X, 'y': Y
    }
}
