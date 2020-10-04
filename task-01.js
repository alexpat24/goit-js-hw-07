//part-1
const ulRef = document.querySelector("#categories");

console.log(`В списке ${ulRef.children.length} категории.`);

//part-2
const liItemRef = ulRef.querySelectorAll("li.item");

liItemRef.forEach(({ children }) =>
  console.log(
    `Категория: ${children[0].textContent}\nКоличество элементов: ${children[1].children.length}`
  )
);

// element.firstElementChild.textContent;
