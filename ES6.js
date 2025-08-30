const tax = 5000;
const eta = 5;
// eta = 7;
console.log(eta);
const student = {
    name: "Shafin",
    age: 24,
    salary: 25000,
    mark: 96
}


// default parameter
function add(num1, num2 = 0) {

}

// template string
const dynamicText = `My Tax: ${tax} and my age ${student.age}`;
console.log(dynamicText);

const innerHTML = `
<div>
    <h1>Hehei bhaya</h1>
    <p>hehei</p>
</div>`

// arrow function
const add2 = (num1, num2) => num1 + num2;
const tenTimes = x => x * 10;

// spread operator
const friends = ["shafin", "dhruv"];
const newFriends = [...friends, "nafin", "ahmed"];

// destructuring
const {mark:totalMarks, profession = "developer"} = student;
console.log(totalMarks, profession);


const [first, second] = friends;
console.log(first, second);