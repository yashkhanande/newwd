// data.js

// Sample data
const data = [
  { Task: "Submit Assignment 6 ASAP", 
    Date: "11/04/2024", 
    Subject:" Web development" },
    { Task: "Project Report", 
    Date: "15/04/2024", 
    Subject:" Physics" },
    { Task: "Submit Your Marks", 
    Date: "19/04/2024", 
    Subject:"For parents meet" },
    { Task: "Submissons", 
    Date: "25/04/2024", 
    Subject:" Linear Algebra" },
    { Task: "End sememster Exam", 
    Date: "14/05/2024", 
    Subject:" All" },
];

// Function to fetch data
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous data fetching
    setTimeout(() => {
      resolve(data);
    }, 1000); // Simulating 1 second delay
  });
}
