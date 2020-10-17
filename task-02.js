const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const element = ingredients.map((num) => {
  const newLi = document.createElement("li");
  newLi.textContent = num;
  return newLi;
});
const navEl = document.querySelector("#ingredients");
navEl.append(...element);

console.log(element);

// const ingredients = ingredients.append(
//   ingredients.map((el) => {
//     const liRef = document.createElement("li");
//     liRef.textContent = el;
//     return liRef;
//   })
// );
// const ingredientsRef = document.querySelector("#ingredients");

// const potato = document.createElement("li");
// potato.textContent = ingredients[0];

// const mushrooms = document.createElement("li");
// mushrooms.textContent = ingredients[1];

// const garlic = document.createElement("li");
// garlic.textContent = ingredients[2];

// const tomato = document.createElement("li");
// tomato.textContent = ingredients[3];

// const greens = document.createElement("li");
// greens.textContent = ingredients[4];

// const condiments = document.createElement("li");
// condiments.textContent = ingredients[5];

//ingredientsRef.append(potato, mushrooms, garlic, tomato, greens, condiments);
