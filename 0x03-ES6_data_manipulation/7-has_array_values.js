export default function hasValuesFromArray(set, array) {
  const jonga = array.every((item) => set.has(item));
  return jonga;
}
