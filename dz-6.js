const Arr1 = [1, 5, "4", "hello"];
const Arr2 = [true, 2, {}, ["a"], 222];
console.log(Arr1[1]);
console.log(Arr2[1]);

Arr1[4] = 22;
console.log(Arr1);

for (const element of Arr1) {
  console.log(element);
}

for (const _i of Arr2) {
  console.log(_i);
}

