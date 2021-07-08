const students = [
  {
    name: "Alice",
    age: 20
  },
  {
    name: "Bob",
    age: 21
  },
  {
    name: "Jane",
    age: 20
  }
];

const renderTable = () => {
  students.forEach(({ name, age }) => {
    const table = document
      .getElementById("data")
      .getElementsByTagName("tbody")[0];

    //stackoverflow
    table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`;
  });
};
//run render table
renderTable();

// a function to calculate avg age
const calcAvgAge = (students) => {
  const total = students.reduce((acc, student) => acc + student.age, 0);
  return total / students.length;
};

// callback function when button clicked
const handleClick = () => {
  const avg = calcAvgAge(students);
  document.getElementById("avg").innerHTML = avg;
};

// const wait = time => new Promise ((resolve) => 
// setTimeout(resolve, time));

// wait(5000).then(() => console.log('second call started')); 
// wait(5000).then(() => console.log('second call finished'));
// wait(5000).then(() => console.log('third call started'));

// console.log('calculation start'));
// );
// // add onclick listener
document.getElementById("calcButton").addEventListener("click", handleClick);
