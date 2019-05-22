module.exports = () => {
  let uiBar = document.getElementById("ui-bar");
  let inputWrapper = document.createElement('div');
  let inputLabel = document.createElement('label');
  let inputField = document.createElement('input');
  inputWrapper.id = "unit-url";
  inputField.id = "unit-url-input";

  inputLabel.id = "unit-url-label";
  inputLabel.textContent = "Cmd:";
  inputWrapper.appendChild(inputLabel);       // url field label

  uiBar.appendChild(inputWrapper);            // key field wrapper
  inputWrapper.appendChild(inputField);       // key field input
}
