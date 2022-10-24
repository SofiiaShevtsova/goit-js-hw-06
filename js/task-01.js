const listCategories = document.querySelector(`#categories`);
const listCategoryItems = document.querySelectorAll(`.item`);

const getCategory = (categories) => {
  console.log(
    `Number of categories: ${listCategories.querySelectorAll(`.item`).length}`
  );
  const categoryNameArray = [...categories].map(
    (category) => category.querySelector(`h2`).textContent
  );
  const categoryLengthArray = [...categories].map(
    (category) => category.querySelectorAll(`li`).length
  );

  for (let i = 0; i < categoryLengthArray.length; i += 1) {
    console.log(`Category: ${categoryNameArray[i]}`);
    console.log(`Elements: ${categoryLengthArray[i]}`);
  }
};

console.log(getCategory(listCategoryItems));
