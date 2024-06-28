let num = +prompt("Enter a Number : ");
console.log(`Prime Number Pyramid Until Given Number :-\n`);
space = num;
while (space >= 2) {
  c = 0;
  for (v = 2; v < space; v++) {
    if (space % v == 0) {
      c++;
      break;
    }
  }
  if (c == 0) break;
  space--;
}
for (i = 2; i <= num; i++) {
  (count = 0), (s = "");
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      count++;
      break;
    }
  }
  if (count == 0) {
    for (gap = 1; gap <= space - i; gap++) {
      s += " ";
    }
    for (x = 1; x <= i; x++) {
      s += "* ";
    }
  } else continue;
  console.log(s);
}
