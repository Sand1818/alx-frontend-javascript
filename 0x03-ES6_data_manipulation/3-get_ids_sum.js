export default function getStudentIdsSum(listArray) {
  return listArray.reduce((accumulator, objet) => accumulator + objet.id, 0);
}
