let num = 5;
function fact(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
console.log(fact(num));

// ++++++===============================================++++++++
// Adding all numbers in a string;
let num1 = "999";
function sum(num) {
  let sumnum = 0;
  if (num < 10) {
    return num;
  } else {
    return (num % 10) + sum(Math.floor(num / 10));
  }
}
console.log(sum(num1));

// +++++++++==============================================================++++++++++
// if the output value is two digit adding them also....

let num2 = "5";
function sum(num) {
  if (num < 10) {
    return num;
  } else {
    let value = (num % 10) + sum(Math.floor(num / 10));
    return (value % 10) + sum(Math.floor(value / 10));
  }
}
console.log(sum(num2));

// ++++++++===============================================================++++++++++
num1 = 99955;
function sum(num) {
  if (num < 10) return num;
  else return (num % 10) + sum(Math.floor(num / 10));
}
res = sum(num);
while (res >= 10) {
  res = sum(res);
}
console.log(res);


// +======================================================================================
