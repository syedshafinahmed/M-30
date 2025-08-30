const student = {
    name: "Shafin",
    1: 50,
    "home-address": "Mirpur",
    marks: 97
}

// dot notation
const studentName = student.name;
// console.log(student.1);

// bracket notation
const student1 = student['1'];
const student2 = student['name'];
const student3 = student['home-address'];
console.log(student1, student2, student3);

const propName = 'marks'
for (const key in student){
    const value = student[key]
    console.log(value);
}
console.log(student[propName]);