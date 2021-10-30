const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsUl = document.querySelector("#ingredients");

const addElements = element => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  itemEl.classList.add("item");
  return itemEl;
};

const elListMap = ingredients.map(ingredient => addElements(ingredient));

ingredientsUl.append(...elListMap);