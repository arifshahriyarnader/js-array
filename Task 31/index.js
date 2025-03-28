//Find the first employee in the "Marketing" department.

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

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

// const firstEmployeeInMarketing = departments.find(
//   (department) => department.name === "Marketing"
// );
// const employeeInMarketing = employees.find(
//   (employee) => employee.departmentId === firstEmployeeInMarketing.id
// );
// console.log(employeeInMarketing);

const firstEmployeeInMarketing= departments.find(department => department.name === "Marketing");
if(firstEmployeeInMarketing){
    const employeeInMarketing=employees.find((employee) => employee.departmentId === firstEmployeeInMarketing.id)
    if(employeeInMarketing){
        console.log("First Employee in Marketing", employeeInMarketing)
    }
    else{
        console.log("No employee in Marketing")
    }
}
else{
    console.log("Marketing department not found")
}