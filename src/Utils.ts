// create a random generator with a seed
// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
export function mulberry32(a: number) {
  return function () {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function sample<T>(rng: () => number, arr: T[]): T {
  const i = Math.floor(rng() * arr.length);
  return arr[i];
}

export const onUrlLinkedChange = (onChange: any, urlParam: string) => (e: any) => {
  const url = new URL(window.location.href);
  let value = e.target ? e.target.value : e;
  url.searchParams.set(urlParam, value);
  window.history.replaceState({}, '', url.toString());
  onChange(value);
};
