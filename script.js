const juices = [
    { name: "Tropical Delight", ingredients: "Mango, Pineapple, Coconut Water" },
    { name: "Green Machine", ingredients: "Kale, Spinach, Green Apple, Lemon" },
    { name: "Berry Blast", ingredients: "Strawberry, Blueberry, Raspberry" },
    { name: "Citrus Refresh", ingredients: "Orange, Grapefruit, Lime" },
    { name: "Carrot Kick", ingredients: "Carrot, Ginger, Orange" }
];

const juiceList = document.getElementById('juice-list');

// Dynamically add juice items to the menu
juices.forEach(juice => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${juice.name}</strong><br><em>${juice.ingredients}</em>`;
    juiceList.appendChild(listItem);
});