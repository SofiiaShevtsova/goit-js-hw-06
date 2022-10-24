const userName = document.querySelector(`#name-input`);
const textGreteeng = document.querySelector(`#name-output`);

userName.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (textGreteeng.textContent = "Anonymous");
    }
    
  // console.log(event.currentTarget.value === "");
  textGreteeng.textContent = event.currentTarget.value;
});
