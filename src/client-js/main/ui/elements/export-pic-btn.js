module.exports = () => {
  let uiBar = document.getElementById("ui-bar");
  let ele = document.createElement('button');
  ele.id = "export-pic-btn";
  ele.textContent = "Export"
  uiBar.appendChild(ele);
}
