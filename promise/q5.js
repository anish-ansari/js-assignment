function maxNumber() {
  let arr = [5, 99, 3, 1, 69]; // an array consisting of random numbers

  // returning a promise function
  return new Promise((resolve, reject) => {
    // the promise function accepts 2 parameters, one for resolving and other for rejecting the promise
    arr.length > 0 // if the array is non empty then the promise is resolved
      ? resolve(Math.max(...arr)) // hence resolve() method will calculate the maximum value in the array
      : reject("No numbers to compare"); // if the array is empty the promise is rejected hence reject() method is called
  });
}

maxNumber() // function call
  .then((num) => {
    // if the promise is resolved this chunk of code is executed
    console.log("Max number is: " + num);
  })

  .catch((err) => {
    // if the promise is rejected this chunk of code is executed
    console.log(err);
  });
