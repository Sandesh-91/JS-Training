let input = parseInt(prompt("Enter a positive integer:"));
if (!isNaN(input) && input > 0) {
  let fact = 1;
  for (let i = 1; i <= input; i++) {
    fact = fact * i;
  }
  alert("Factorial of " + input + " is " + fact);
} else {
  alert("Invalid number:");
}
