let input = prompt("Enter a value:");
let value;
if (input === "false") {
  value = false;
} else if (input === "0") {
  value = 0;
} else if (input === "null") {
  value = null;
} else if (input === "undefined") {
  value = undefined;
} else if (input === "NaN") {
  value = NaN;
} else if (input === "") {
  value = "";
} else if (input === '""') {
  value = "";
} else {
  value = input;
}
if (value) {
  alert("The value is truthy");
} else {
  alert("The value is falsy");
}
