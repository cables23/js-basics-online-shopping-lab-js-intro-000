var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return
  } else {
    var line = 'In your cart, you have '
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if (i === l - 1) {
          line = line + `${item} at $${cart[i][item]}.`
        } else {
        line = line + `${item} at $${cart[i][item]}, `
        }
      }
  }
  console.log(line);
  return
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i,1);
        return cart
      }
    }
    console.log('That item is not in your cart.')
    return
}

function placeOrder(ccNum) {
  if (ccNum !== undefined) {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)
  cart = []
  return cart
  }
  console.log("We don't have a credit card on file for you to place your order.")
  return;
}
