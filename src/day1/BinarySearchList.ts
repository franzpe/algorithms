export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);

    if (haystack[m] === needle) return true;

    if (needle > haystack[m]) {
      lo = m + 1;
    } else {
      hi = m;
    }
  } while (lo < hi);

  return false;
}
