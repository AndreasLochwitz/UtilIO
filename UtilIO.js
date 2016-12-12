
class UtilIO {

  constructor(inputTextId, outputTextId, enableEnterSubmit = true) {
    this.inputElement = document.getElementById(inputTextId);
    this.outputElement = document.getElementById(outputTextId);
    this.processFunction = null;
    if (enableEnterSubmit) {
      // Referenz fuer Eventhandler sichern
      let self = this;
      this.inputElement.addEventListener('keyup', function(keyData) {
        if (keyData.key === "Enter") {
          self.processFunction();
        }
      });
    }
  }

  setProcessFunction(processFunction) {
    this.processFunction = processFunction;
  }

  registerButton(buttonId) {
    var self = this;
    document.getElementById(buttonId).addEventListener('click', function() {
      self.processFunction();
    })
  }

  getText() {
    return this.inputElement.value;
  }

  clearText() {
    this.inputElement.value = "";
  }

  appendText(newText, properties = null) {
    var newElement = document.createElement('p');
    newElement.innerHTML = newText;
    if (properties) {
      for (let item in properties) {
        newElement[item] = properties[item];
      }
    }
    this.outputElement.appendChild(newElement);
  }

  scrollToEnd() {
    this.outputElement.scrollTo(0, this.outputElement.scrollHeight);
  }

}
