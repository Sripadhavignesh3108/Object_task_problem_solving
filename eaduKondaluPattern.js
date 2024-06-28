let str = prompt("Enter a String : ");
let rows = +prompt("Enter number of rows :");
let main = [],
  row = 0;
for (i = 0; i < rows; i++) {
  let emp = [];
  for (j in str) {
    emp.push(" ");
  }
  main.push(emp);
}
for (i in str) {
  main[row][i] = str[i];
  if (row == 0) down = true;
  if (row == rows - 1) down = false;

  if (down) row++;
  else row--;
}
for (x of main) {
  console.log(x.join(""));
}
