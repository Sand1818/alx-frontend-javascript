export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    const string = [];
    for (const elemennt of set) {
      if (elemennt.startsWith(startString)) {
        string.push(elemennt.slice(startString.length));
      }
    }
    return string.join('-');
  }
  return '';
}
