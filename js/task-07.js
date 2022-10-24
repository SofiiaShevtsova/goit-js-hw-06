const fontControler = document.querySelector(`#font-size-control`);
const textForChange = document.querySelector(`#text`);

const onFontControlerChange = (event) => {
  let newFontSize = `${event.currentTarget.value}px`;
  textForChange.style.fontSize = newFontSize;
};

fontControler.addEventListener("change", onFontControlerChange);
