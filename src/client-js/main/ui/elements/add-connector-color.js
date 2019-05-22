module.exports = () => {
  let uiBar = document.getElementById("ui-bar");
  let ele = document.createElement('input');
  ele.id = "connector-color";
  uiBar.appendChild(ele);       // set connector color
}
