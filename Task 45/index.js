// Using a for-of loop, print the names of employees earning more than 5000.
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const employeesHigherSalary = employees.filter(
  (employee) => employee.salary > 5000
);

for (const employee of employeesHigherSalary) {
  console.log(`${employee.name}'s salary is ${employee.salary}`);
}

//approach 2
// for (const employee of employees) {
//   if (employee.salary > 5000) {
//     console.log(`${employee.name}'s salary is ${employee.salary}`);
//   }
// }
