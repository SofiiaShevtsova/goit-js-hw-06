let counterValue = document.querySelector(`#value`);
counterValue.innerHTML = 0;

const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);

const onDecrementClick = () => (counterValue.innerHTML -= 1);
const onIncrementClick = () =>
  (counterValue.innerHTML = Number(counterValue.innerHTML) + 1);

decrementBtn.addEventListener("click", onDecrementClick);
incrementBtn.addEventListener("click", onIncrementClick);
