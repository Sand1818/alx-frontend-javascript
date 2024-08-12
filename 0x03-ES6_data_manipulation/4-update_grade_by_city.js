export default function updateStudentGradeByCity(array, city, newMarks) {
  return array
    .filter((object) => object.location === city)
    .map((student) => {
      const marks = newMarks
        .filter((index) => index.studentId === student.id)
        .map((idx) => idx.grade)[0];
      const grade = marks || 'N/A';
      return { ...student, grade };
    });
}
