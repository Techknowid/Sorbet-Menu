const juices = [
    { name: "Mango Mania", price: "$4.99", description: "Mango, yogurt, honey" },
    { name: "Berry Blast", price: "$5.49", description: "Strawberries, blueberries, banana" },
    { name: "Green Glow", price: "$4.79", description: "Spinach, apple, cucumber, lemon" },
    { name: "Citrus Zing", price: "$4.59", description: "Orange, lemon, ginger" }
  ];
  
  const menu = document.getElementById("menu");
  
  juices.forEach(juice => {
    const item = document.createElement("div");
    item.className = "menu-item";
    item.innerHTML = `
      <h3>${juice.name}</h3>
      <p><strong>${juice.price}</strong></p>
      <p>${juice.description}</p>
    `;
    menu.appendChild(item);
  });
  