const unitTextures   = require('get-unit-textures');

module.exports = () => {
  console.log('unit-textures')
  unitTextures((_unitTextures)=>{
    let uiBar = document.getElementById("ui-bar");
    let sel = document.createElement("select");
    sel.id = "unit-selector";
    uiBar.appendChild(sel);
    let element =  document.getElementById("unit-selector");
    if (typeof(element) != 'undefined' && element != null){
      for(let i = 0; i < _unitTextures.length; i++){
        if(_unitTextures[i]!=null){
          let op = document.createElement('option');
          op.text = _unitTextures[i].slice(0,(_unitTextures[i].length - 4));
          op.value = _unitTextures[i];
          sel.appendChild(op);
        }
      }
    }
  })


}
