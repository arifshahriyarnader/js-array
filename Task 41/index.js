//Assume each employee has a projects array 
//(e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). 
//Find the total number of unique projects being handled across all employees.
const employees = [
    { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
    { id: 2, name: "Bob", projects: ["Project C", "Project D"] },
    { id: 3, name: "Charlie", projects: ["Project E", "Project F"] },
    { id: 4, name: "Diana", projects: ["Project G", "Project H"] },
    { id: 5, name: "Edward", projects: ["Project I", "Project J"] },
    { id: 6, name: "Fiona", projects: ["Project K", "Project L"] }, 
  ];
const allProjects=employees.flatMap(employee => employee.projects);
const uniqueProjects=new Set(allProjects);
const totalUniqueProjects=uniqueProjects.size;
console.log(totalUniqueProjects);

  