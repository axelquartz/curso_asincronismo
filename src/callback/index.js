function sum(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

setTimeout(() => {
  console.log(calc(2, 3, multiply));
}, 8000);

function greeting(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greeting, 4000, "Axelo");
