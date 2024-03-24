export function addDiscount(cart){
  let total = 0;
  cart.forEach((item) => {
    total += item.price * (1 - (item.discountPercentage / 100))
  })
  return total.toFixed(2);
}