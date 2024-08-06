export default function createIteratorObject(report) {
  const arrayOther = [];
  for (const item of Object.values(report.allEmployees)) {
    arrayOther.push(...item);
  }

  return arrayOther;
}
