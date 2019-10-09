/* unique.ts
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique
 */


//gross mutable answer

export function findUniq (arr: number[]) {
  const first = arr[0];
  let answer = first;
  for (let i = 1; i<arr.length; i++) {
    if (i === arr.length - 1) {
      answer = arr[i];
      break;
    }
    else if (arr[i] !== first) {
      answer = arr[i] === arr[i+1] ? first : arr[i];
      break;
    }
  }
  return answer;
}

/* best practices: sort and find

export function findUniq(arr: Array<number>): number {
  arr = arr.sort()
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
}

export function findUniq(arr: Array<number>): number {
  const x = arr[arr[0] == arr[1] ? 0 : 2];
  return arr.find(y => y != x);
}

*/
