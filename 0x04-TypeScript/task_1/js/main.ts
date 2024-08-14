interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'Jonny',
  lastName: 'Boy',
  location: 'New York',
  fullTimeEmployee: false,
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'Daniel',
  lastName: 'Clif',
  location: 'Australia',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Maria', 'Butler'));

interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}

class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const studentClass: StudentClass = new StudentClass('Mariem', 'Lee');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
