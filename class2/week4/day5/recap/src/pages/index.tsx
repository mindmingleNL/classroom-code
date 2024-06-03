interface DancerProps {
  female: boolean;
}

const Dancer = (props: DancerProps) => {
  console.log(props.female);
  return <p>💃</p>;
};

interface LionProps {
  lion: boolean;
}

const Lion = (props: LionProps) => {
  if (props.lion === true) {
    return <p>🦁</p>;
  } else {
    return <p>🐈</p>;
  }
};

const Cheese = () => {
  return <p>🧀</p>;
};

const All = () => {
  return (
    <div>
      <Dancer female={true} />
      <Lion lion={true} />
      <Lion lion={false} />
      <Cheese />
    </div>
  );
};
// turn this into a list of cat and dog emojis, every true should be a cat
const catOrDogs = [true, false, false, true, true, true];

const primes = [1, 3, 5, 7, 9, 11, 13, 17];

const students2 = [
  { studentName: "Trang", favoriteNo: 3 },
  { studentName: "Brandon", favoriteNo: 7 },
  { studentName: "Mark", favoriteNo: 16 },
  { studentName: "Nargiz", favoriteNo: 9 },
];
interface Student {
  studentName: string;
  favoriteNo: number;
}
const Student2 = () => {
  return students2
    .filter((student: Student) => {
      student.favoriteNo > 8;
    })
    .map((student: Student) => {
      <h2>
        Hi {student.studentName} your favorite number is
        {student.favoriteNo}
      </h2>;
    });
};

const Primes = () => {
  return primes.map((prime: number) => {
    return <p>{prime}</p>;
  });
};

export default function Home() {
  return (
    <>
      <main>
        <h1>Hello React Recap</h1>
        <All />
        <Primes />

        <div className="card">
          <h1>Card title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
            excepturi modi itaque, molestiae corporis quisquam quam praesentium
            dolorum minus, obcaecati ex repellendus quasi! Explicabo illum odio
            consequuntur voluptatem non et.
          </p>
        </div>
      </main>
    </>
  );
}
