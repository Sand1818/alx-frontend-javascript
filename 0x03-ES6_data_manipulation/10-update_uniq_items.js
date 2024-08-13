export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  map.forEach((quant, value) => {
    if (quant === 1) map.set(value, 100);
  });
  return map;
}
