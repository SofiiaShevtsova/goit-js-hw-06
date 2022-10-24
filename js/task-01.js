const listCategories = document.querySelector(`#categories`);
const listCategoryItems = document.querySelectorAll(`.item`);

const getCategoriesLength = () =>
  `Number of categories: ${listCategories.querySelectorAll(`.item`).length}`;
console.log(getCategoriesLength());

const getCategory = (categories) => {
  const categoryArray = [];
  const categoryNameArray = [...categories].map(
    (category) => category.querySelector(`h2`).textContent
  );
  const categoryLengthArray = [...categories].map(
    (category) => category.querySelectorAll(`li`).length
  );

  for (let i = 0; i < categoryLengthArray.length; i += 1) {
    const category = {
      Category: ``,
      Elements: 0,
    };
    category.Category = categoryNameArray[i];
    category.Elements = categoryLengthArray[i];
    console.log(category);
    // categoryArray.push(category);
  }
  // return categoryArray;
};

console.log(getCategory(listCategoryItems));
