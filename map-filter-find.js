const students = [
    {id: 1, name: "shafin",  marks: 97},
    {id: 2, name: "ahmed",  marks: 98},
    {id: 3, name: "dhruv",  marks: 99},
    {id: 4, name: "nafin",  marks: 87},
];
const names = students.map(student => student.name);
const marks = students.map(student => student.marks);
const ids = students.map(student => student.id);
console.log(names);
console.log(marks.filter(student => student > 98));
console.log(marks.find(student => student > 90));
console.log(ids);