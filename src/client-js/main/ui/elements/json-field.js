module.exports = () => {
  let uiBar = document.getElementById("ui-bar");
  let ele = document.createElement('textarea');
  ele.id = "json-field";
  uiBar.appendChild(ele);
}
