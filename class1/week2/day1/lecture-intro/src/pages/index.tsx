// A REACT COMPONENT IS A FUNCTION
// THAT RETURNS HTML/JSX

// DRY: Don't Repeat Yourself
// WET: Write Everything Twice

import { Greeter } from "@/components/Greeter";

const students = [
  { name: "Shruti", happy: 100 },
  { name: "Tannaz", happy: 100 },
  { name: "Marisha", happy: 100 },
  { name: "Artem", happy: 100 },
  { name: "Alena", happy: 100 },
  { name: "Albert", happy: 100 },
];

function Home() {
  return (
    <div>
      <a href="/home">Home</a>
      <h1>Hello React</h1>
      {students.map((student) => {
        return (
          <Greeter
            key={student.name}
            target={student.name}
            happy={student.happy}
          />
        );
      })}
    </div>
  );
}

export default Home;
