const drawmodes = ["Draw", "Erase", "Node", "End"]

module.exports = () => {

  console.log('draw-mode')
  let uiBar = document.getElementById("ui-bar");
  let sel = document.createElement("select");
  sel.id = "draw-mode";

  uiBar.appendChild(sel);

  let element =  document.getElementById("draw-mode");
  if (typeof(element) != 'undefined' && element != null){
    for(let i = 0; i < drawmodes.length; i++){
      if(drawmodes[i]!=null){
        let op = document.createElement('option');
        op.text = drawmodes[i];
        op.value = drawmodes[i];
        sel.appendChild(op);
      }
    }
  }

}
