import { FormEvent, useState } from "react";

const FormExample = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ignore this
    setSubmitted(true);

    const nameFromForm = event.currentTarget.username.value;
    const ageFromForm = event.currentTarget.age.value;
    const descriptionFromForm = event.currentTarget.description.value;

    // console.log(`name was: ${nameFromForm}`);
    // console.log(`age was: ${ageFromForm}`);
    // console.log(`description was: ${descriptionFromForm}`);

    // we are done with forms!

    const postResponse = await fetch("http://127.0.0.1:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: nameFromForm,
        age: ageFromForm,
        description: descriptionFromForm,
      }),
    });

    const postData = await postResponse.json();
    console.log(postData);
    console.log("We send the POST");
  };

  return (
    <div>
      <h1>Forms</h1>

      <form className="my-form" onSubmit={handleForm}>
        <label htmlFor="username">Name:</label>
        <input type="text" id="username" placeholder="Name" />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" placeholder="Age" />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" placeholder="description" />

        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thanks for submitting!</p>}
    </div>
  );
};
export default FormExample;
