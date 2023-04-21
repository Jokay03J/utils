/**
 * return boolean for value is present in array
 */
export function has(
  arr: Array<string | number>,
  xp: (item: string | number, index: number) => boolean
): boolean {
  for (let index = 0; index < arr.length; index++) {
    const str = arr[index];
    if (xp(str, index)) return true;
  }
  return false;
}
