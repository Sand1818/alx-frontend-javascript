export default function getStudentsByLocation(list, city) {
  return list.filter((objet) => objet.location === city);
}
