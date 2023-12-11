// Een pagina is gewoon een component
// Een component is een functie, die HTML returned
// Een component heeft altijd als eerste een hoofdletter
// Nadat we het component hebben aangemaakt, moeten we hem exporteren

import MyButton from "@/components/MyButton";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      {/* <button className="button contact-button">
        This is my contact button
      </button> */}
      <MyButton
        className="contact-button"
        buttonText="This is my contact button"
        mijnFunctie={() => window.alert("Mail!")}
      />
      <MyButton
        buttonText="Click to mail me"
        mijnFunctie={() => window.alert("Mail!")}
      />
    </div>
  );
};

export default Contact;
