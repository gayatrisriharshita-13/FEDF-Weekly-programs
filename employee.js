const employee = {
    name: "Gayatri",
    sal: 50000,
    age: 22,
    designation: "Software Developer"
};

// Object destructuring
const { name, sal } = employee;

console.log("Employee Name:", name);
console.log("Employee Salary:", sal);