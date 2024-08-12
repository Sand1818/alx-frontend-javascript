export default function getListStudentIds(sutendIdList) {
  if (!Array.isArray(sutendIdList)) return [];
  return sutendIdList.map((object) => object.id);
}
