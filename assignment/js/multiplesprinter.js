let variable = Number(prompt("Enter a number:"));
if (!isNaN(variable)) {
  let count = 1;
  while (count <= variable) {
    let result = 3 * count;
    if (result % 5 == 0) {
      break;
    } else if (result % 3 == 0 && result <= variable) {
      console.log("3 * " + count + " = " + result);
    }
    count++;
  }
} else {
  console.log("Not a number:");
}
