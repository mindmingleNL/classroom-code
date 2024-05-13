import Navbar from "../components/Navbar";

const Contact = () => {
  const students = ["Brandon", "SMark", "Trang", "SNargiz", "Swen"];

  return (
    <>
      <Navbar></Navbar>
      <h1>Contact Fruits.com 🍎🍌🍑</h1>
      <p>Call us now at +800 192830 2848</p>
      {students
        .filter((student) => student.startsWith("S"))
        .map((student) => {
          return (
            <div className="studentCard">
              <h3>{student}</h3>
            </div>
          );
        })}
    </>
  );
};

export default Contact;
