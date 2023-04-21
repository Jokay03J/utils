/**
 * replace value into array
 */
export function replace(
  arr: string[],
  xp: RegExp | string,
  value: string
): string[] {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element.replace(xp, value));
  }

  return newArr;
}
