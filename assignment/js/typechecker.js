let variable = prompt("Enter a value:");
if (variable === "true" || variable === "false") {
  alert("Type is boolean");
} else if (variable === "") {
  alert("Type is undefined");
} else if (variable === "null") {
  alert("Type is null");
} else if (!isNaN(Number(variable))) {
  alert("Type is number");
} else {
  alert("Type is string");
}
