function hello() {
  setTimeout(1000); // timing out for 1 sec
  console.log("Hello world!");
}

function bye() {
  console.log("Bye world!");
}

// defining an async function printer()
async function printer() {
  await hello; // waiting for hello function to complete timeout and execution
  bye(); // calling bye() function to display output
}

printer();
