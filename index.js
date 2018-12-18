var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // lable item
 var itemincart={itemName:"",itemPrice:0}
  itemincart.itemName=item
  itemincart.itemPrice=Math.floor(Math.random()*100)+1
  // put item in cart
  cart.push(itemincart)
  return `${itemincart.itemName} has been added to your cart.`
}

function viewCart() {
  var i=0,n=cart.length,itemsincart=""
  if (n===0) {
    return "Your shopping cart is empty." 
  } else {
    for (i=0;i<n;i++) {
      itemsincart=`${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    return `In your cart, you have ${itemsincart}`
  }
}

function total() {
  // write your code here
  var i=0, cartTot=0
  for (i=0;i<cart.length;i++) {
    cartTot=cartTot+cart[i].itemPrice
  }
  return cartTot
}

function removeFromCart(item) {
  // write your code here
  var i=0 
  for (i=0;i==cart.length;i++) {
    if (item==cart[i].itemName) {
      cart[i].itemName=""
      cart[i].itemPrice=0
      return cart
    } else return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber>0) {
    return "Your total cost is $" + total() + `, which will be charged to the card ${cardNumber}.`
    cart=[]; // does not clear the cart array
  } return "Sorry, we don't have a credit card on file for you."
}