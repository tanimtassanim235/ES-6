const getTax = (amount, taxRate) => {
    amount* taxRate / 100;
}

const add = (p, q) => p + q;
const getSquare = (x) => x*x;

const logIt = () => console.log(78);

const firstElement = nums => nums[0];

console.log(firstElement([23, 26]));
console.log(getSquare(5));
console.log(add(4,0));