module.exports = () => {
  let uiBar = document.getElementById("ui-bar");
  let ele = document.createElement('button');
  ele.id = "copy-btn";
  ele.textContent = "Copy"
  uiBar.appendChild(ele);  // add copy button
}
