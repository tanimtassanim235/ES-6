const {price, quantity, tax = 6} = {name: 'shirt', price: 500, quantity: 7};

console.log(price, quantity, tax);

const device = {name: 'phone', brand: 'samsung', price: 18000}
const {brand} = device;



// const discount = product.price* 20/100;
// const youPay = product.price - discount;
// const vatAmout = product.price*7/100;
// const totalAmout = youPay + vatAmout;
