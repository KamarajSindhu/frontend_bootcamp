// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = "420.69235632455";
const price = parseFloat(totalPrice);
const roundedPrice = price.toFixed(2);
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy €${ roundedPrice }`;










