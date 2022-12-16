function sortedSquaredArray(array) {
  const newArrray = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);
    const rightSquared = Math.pow(array[pointerRight], 2);
    if (leftSquared > rightSquared) {
      newArrray[i] = leftSquared;
      pointerLeft++;
    } else {
      newArrray[i] = rightSquared;
      pointerRight--;
    }
  }
  return newArrray;
}

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
b = [-9, -5, -2, 0, 1, 5, 8, 10];
c = [];

console.log(sortedSquaredArray(a));
console.log(sortedSquaredArray(b));
console.log(sortedSquaredArray(c));
