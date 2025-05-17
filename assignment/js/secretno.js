let secretno = 7;
let hold = 0;
do {
  hold = Number(prompt("Guess the correct number:"));
  if (hold === secretno) {
    alert("Correct! " + hold + " was the number ");
  }
} while (hold != secretno);
