interface MinorCredits {
  brand: 'minor';
  credit: number;
}

interface MajorCredits {
  brand: 'major';
  credit: number;
}


function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const total = subject1.credit + subject2.credit;
  const objecct: MajorCredits = { credit: total, brand: "major", };
  return objecct;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totall = subject1.credit + subject2.credit;
  const objectt: MinorCredits = { credit: totall, brand: "minor", };
  return objectt;
}
