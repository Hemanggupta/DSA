function monotonic(array) {
  const first = array[0];
  const last = array[array.length - 1];

  if (first === last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] != array[i + 1]) return false;
    }
  } else if (first < last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) return false;
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) return false;
    }
  }
  return true;
}

const a = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 1];
const b = [98, 34, 23, 11, 11];
const c = [12, 23, 45, 56, 76, 34, 32, 12];
const d = [];

console.log(monotonic(a));
console.log(monotonic(b));
console.log(monotonic(c));
console.log(monotonic(d));
