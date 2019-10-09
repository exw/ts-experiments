/* dedupe.ts

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

 */

export function removeDuplicateWords (s: string):string {
  let tempString = s.split(" ");
  function helper (first: string[], rest: string[]): string {
    if (rest.length === 0) {
      return first.join(" ");
    }
    else if (first.indexOf(rest[0]) > -1) {
      return helper(first, rest.slice(1));
    }
    else {
      return helper(first.push(rest[0], rest.slice(1));
    }
    return helper([], s.split(" "));
}
