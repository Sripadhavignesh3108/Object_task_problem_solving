// 1) Program to print the perfect times count in the array of objects
// input: arr = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}]
// output: 1

let arr = [{ Time1: "10:45", Time2: "12:50", Time3: "11:00" }];
count = 0;
for (i of arr) {
  for (j in i) {
    let str = i[j].split(":").join("");
    if (Number(str) % 100 == 0) count++;
  }
}
console.log("Total Perfect Times are : ", count);

// +============= Second code of Top Problem ================+

let arr1 = [{ Time1: "10:45", Time2: "12:00", Time3: "11:00" }];
count = 0;
for (j in arr1[0]) {
  let str = arr1[0][j].split(":").join("");
  if (Number(str) % 100 == 0) count++;
}
console.log("Total Perfect Times is : ", count);

// ++++======================================================================================+

// 2) Program to print the rest of the minutes to become a perfect time.

// input: arr = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}]
// output:
// Time1: 15 min
// Time2: 10 min

let secondArr = [{ Time1: "10:45", Time2: "12:50", Time3: "11:00" }];
for (i of secondArr) {
  timeLeft = 0;
  for (j in i) {
    let str = i[j].split(":");
    if (str[1] != 0) {
      console.log(j + ":", 60 - str[1], "Mins");
    }
  }
}

// // +============= Second code of Top Problem ================+

let secondArr1 = [{ Time1: "10:45", Time2: "12:50", Time3: "11:00" }];
timeLeft = 0;
for (j in secondArr1[0]) {
  let str = secondArr1[0][j].split(":");
  if (str[1] != 0) {
    console.log(j + ":", 60 - str[1], "Mins");
  }
}

// +++++++==================================================================================++++++

// 3) Program to print the next perfect time near to the given times.

// input: arr = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}]
// output:
// Time1: 11:00
// Time2: 01:00
let thirdArr = [{ Time1: "10:45", Time2: "12:50", Time3: "11:00" }];
for (i of thirdArr) {
  for (j in i) {
    let str = i[j].split(":");
    if (str[1] != 0) {
      if (str[0] == 12) {
        str[0] = "0" + 1;
        str[1] = "00";
      } else {
        if (str[0] > 9) {
          str[0]++;
        } else {
          str[0] = "0" + (Number(str[0]) + 1);
        }
        str[1] = "00";
      }
      console.log(str);
    }
  }
}

// +++++=============== SECOND CODE FOR ABOUT PROBLEM ======================+++++++++++

let array = [{ time1: "10:45" }, { time2: "12:50" }, { time3: "11:00" }];
for (i of array) {
  for (j in i) {
    min = i[j].slice(3)
    if(min!="0"){
      hours = Number(i[j].slice(0,2))
      if(hours>=12){
        console.log("0"+(hours-12+1)+": 00")
      }
      else{
        console.log(hours+1+": 00")
      }
    }
  }
}
