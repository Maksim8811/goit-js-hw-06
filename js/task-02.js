const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngred = document.querySelector("#ingredients");



ingredients.forEach(liEl => {
  const liElements = document.createElement("li");
  liElements.textContent = liEl;

  
  liElements.classList.add("item");
  
  
  ulIngred.append(liElements);
  console.log(liElements);
})


