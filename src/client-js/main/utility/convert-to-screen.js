module.exports = (x, y, tileWidth, tileLength, offsetX, offsetY) => {

    return {
      '_x' : Math.floor((y / (tileLength/2) - x / (tileWidth/2))/2)+(offsetX),
      '_y' : Math.floor((x / (tileWidth/2) + y / (tileLength/2))/2)+(offsetY)
    }

}
