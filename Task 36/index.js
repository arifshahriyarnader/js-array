// Extract all employee skill names into a single array.
const employees = [
    {
      id: 1,
      name: "Alice",
      skills: ["JavaScript", "React", "HTML"],
    },
    {
      id: 2,
      name: "Bob",
      skills: ["Python", "Django", "SQL"],
    },
    {
      id: 3,
      name: "Charlie",
      skills: ["Java", "Spring", "AWS"],
    },
    {
      id: 4,
      name: "Diana",
      skills: ["JavaScript", "Node.js", "Express"],
    },
  ];

  const employeeSkills=employees.flatMap(employee => employee.skills)
    console.log(employeeSkills)

//approach 2
// const employeeSkills=employees.map(employee => employee.skills).flat()
// console.log(employeeSkills)

//approach 3
// const employeeSkills=employees.reduce((acc,employee) => {
//     return acc.concat(employee.skills)
// }, [])
// console.log(employeeSkills)

//each employee name and their skills
employees.forEach(employee => {
    console.log(`${employee.name}'s skills: ${employee.skills.join(', ')}`)
})