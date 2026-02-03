const numbers = [30, 34, 53, 543, 25, 64, 57];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(31, 46, 75, 94, 43);
// console.log(max);

const max2 = Math.max(...numbers);
// console.log(max2);

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [0, 99, ...first, 97, 45, 38];

second.push(6);
// console.log(first);
// console.log(third);

const person = {name: 'Parsion', age: 26};
const employee = {position: 'senior developer', ...person};

console.log(employee);