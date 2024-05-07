type Teacher = "Swen" | "Yoeran";

const promoteTeacher = (name: Teacher) => {
  // do stuff
};

promoteTeacher("Yoeran");

interface TeacherType {
  teacherName: Teacher;
  age: number;
}

interface StudentType {
  studentName: string;
  age: number;
  teachers: TeacherType[];
}

type PersonOnEarth = TeacherType | StudentType | boolean;

// const student3: PersonOnEarth = false;

const student1: PersonOnEarth = {
  studentName: "Pim",
  age: 33,
  teachers: [
    {
      teacherName: "Yoeran",
      age: 36,
    },
    {
      teacherName: "Swen",
      age: 36,
    },
  ],
};

const student2: StudentType = {
  studentName: "Joey",
  age: 26,
  teachers: [
    {
      teacherName: "Jan",
      age: 10,
    },
  ],
};

const secondClass: StudentType[] = [student1, student2];

for (let i = 0; i < secondClass.length; i++) {
  console.log(secondClass[i]);
}
