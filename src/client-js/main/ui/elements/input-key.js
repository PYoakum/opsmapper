module.exports = () => {
  let uiBar = document.getElementById("ui-bar");
  let inputWrapper = document.createElement('div');
  let inputLabel = document.createElement('label');
  let inputField = document.createElement('input');

  inputWrapper.id = "unit-key";
  uiBar.appendChild(inputWrapper);       // key field wrapper

  inputLabel.id = "unit-key-label";
  inputLabel.textContent = "Key:";
  inputWrapper.appendChild(inputLabel);       // key field label

  inputField.id = "unit-key-input";
  inputWrapper.appendChild(inputField);       // key field input
}
