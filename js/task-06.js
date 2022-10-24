const inputText = document.querySelector(`#validation-input`);
const stringLength = document.querySelector(`input[data-length="6"]`);

const onInputTextBlur = (event) => {
  if (`${event.currentTarget.value.length}` === stringLength.dataset.length) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
    return;
  }
  inputText.classList.remove("valid");
  inputText.classList.add("invalid");
};

inputText.addEventListener("blur", onInputTextBlur);
