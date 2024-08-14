interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'Josh',
  lastName: 'farson',
  age: 23,
  location: 'Earth'
}

const secondStudent: Student = {
  firstName: 'John',
  lastName: 'Livington',
  age: 45,
  location: 'Mars'
}

const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
})
