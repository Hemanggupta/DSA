function shift(arr, shift) {
  const len = arr.length;
  shift = shift % len;
  const tempArr = arr.slice(len - shift);
  for (let i = len - shift - 1; i >= 0; i--) {
    arr[i + shift] = arr[i];
  }
  for (let i = 0; i < shift; i++) {
    arr[i] = tempArr[i];
  }
  return arr;
}

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
b = 13;

console.log(shift(a, b));
