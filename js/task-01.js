const listEl = document.querySelector("#categories");



const liItem = document.querySelectorAll(".item");
// console.log(liItem)
console.log(`Number of categories: ${liItem.length} `);

liItem.forEach(item => {
    const title = item.querySelector("h2");
    console.log(`Category:${title.textContent}`);
    const itemList = item.querySelectorAll("ul li");
    console.log(`Elements: ${itemList.length}`);
    
})









