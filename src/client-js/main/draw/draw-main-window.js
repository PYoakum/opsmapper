module.exports = () => {


    // set pixel ratio based on the browser window for canvas, helps svgs appear crisp and sharp :)
    var PIXEL_RATIO = (function() {
      var ctx = document.createElement("canvas").getContext("2d"),
      dpr = window.devicePixelRatio || 1,
      bsr = ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio || 1;
      return dpr / bsr;
    })();

    // create the main canvas object
    function genHDCanvas(w, h, ratio){
        if (!ratio) { ratio = PIXEL_RATIO; }
        var can = document.createElement("canvas");
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
        return can;
    }

    let body = document.getElementsByTagName("body")[0];
    let cnv = genHDCanvas(window.innerWidth, window.innerHeight - 50)
    cnv.id = "main-window";
    cnv.style.position = "absolute";
    cnv.style.top = "50px";
    body.appendChild(cnv);
  }
