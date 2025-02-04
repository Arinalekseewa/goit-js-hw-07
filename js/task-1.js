const categoriesList = document.querySelector(`#categories`);
const categoriesItem = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(category => {
    const title = category.querySelector(`h2`).textContent;
    const elementCount = category.querySelectorAll(`li`).length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementCount}`);
});