interface Exam {
  name: string;
  category: number;
  subject: number;
  professor: number;
  url: string;
}

interface ExamDB {
  nameId: number;
  category: number;
  subject: number;
  professor: number;
  url: string;
}

export {
  Exam,
  ExamDB,
};
