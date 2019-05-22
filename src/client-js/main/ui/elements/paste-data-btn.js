module.exports = () => {
  let uiBar = document.getElementById("ui-bar");
  let ele = document.createElement('button');
  ele.id = "paste-btn";
  ele.textContent = "Paste"
  uiBar.appendChild(ele);
}
