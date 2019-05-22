module.exports = () => {
  let uiBar = document.getElementById("ui-bar");
  let ele = document.createElement('input');
  ele.id = "connector-width";
  uiBar.appendChild(ele);       // set connector width

  let preview = document.createElement('div');
  preview.id = "connector-preview";
  uiBar.appendChild(preview);       // set connector width
}
