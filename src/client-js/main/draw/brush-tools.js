module.exports={
  colorSelector: (palette) => {
    if(Array.isArray(palette)){
      return palette[Math.floor(Math.random()*palette.length)]
    } else {
      return palette
    }
  }
}
