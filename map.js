const numbers = [4, 7, 2, 3, 5];
// const doubled = []
// for(const number of numbers){
//     const result = number * 2;
//     doubled.push(result);
// }

// map
// const doubleIt = x => x * 2;
// const doubled = numbers.map(doubleIt);
const doubled = numbers.map(x => x * 2);
const fiveTimes = numbers.map(y => y * 5);
const squared = numbers.map(z => z * z);
console.log(doubled);
console.log(fiveTimes);
console.log(squared);


const friends = ["shafin", "dhruv", "ahmed", "anik"];
const nameLengths = friends.map(name => name.length);
const firstLetter = friends.map(name => name[0].toUpperCase());
console.log(nameLengths);
console.log(firstLetter);