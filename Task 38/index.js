// Assume each employee can have multiple skills. 
// Create an array of employee skills and flatten them. 
// Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

const employees = [
    { name: "Alice", skills: ["Excel", "Management"] },
    { name: "Bob", skills: ["Python", "Data Analysis"] },
    { name: "Charlie", skills: ["JavaScript", "Web Development", "React"] },
    { name: "Diana", skills: ["Project Management", "Agile", "JavaScript"] },
  ];

  const allSkills=employees.flatMap(employee => employee.skills);
  console.log(allSkills);