const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector(`#ingredients`);

const addIngredients = (ingredients) => {
  const ingredientArray = [];
  for (const ingredientName of ingredients) {
    const ingredient = document.createElement("li");
    ingredient.classList.add("item");
    ingredient.textContent = `${ingredientName}`;
    ingredientArray.push(ingredient);
  }
  listIngredients.append(...ingredientArray);
};

console.log(addIngredients(ingredients));
