const arr = [-5, -3, -2, 0, 3, 4, 9];

arr.forEach((element, index) => {
  arr[index] = element ** 2;
});
console.log(arr.sort((a, b) => a - b));
