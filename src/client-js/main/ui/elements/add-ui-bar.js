module.exports = () => {
  let body = document.getElementsByTagName("body")[0];
  let ele = document.createElement('div');
  ele.id = "ui-bar";
  body.appendChild(ele);  // add ui bar
}
