let variable = Number(prompt("Enter a number:"));
if (!isNaN(variable)) {
  let count = 1;
  while (count <= variable) {
          if (count % 3 == 0) {
      console.log(count);
    }
    if (count % 5 == 0) {
      break;
    }

    count++;
  }
} else {
  console.log("Not a number:");
}
