import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };
  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  // const onClickInput = (event: MouseEvent) => {
  //   console.log(event.target?.value);
  // };

  const onSubmitTheForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitting the form!");

    // 1. Get our values
    console.log(event.currentTarget);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    console.log("Data", data);

    // 2. Send the form data to our API
    const result = await fetch(
      "http://localhost:3001/my-api-endpoint-that-does-not-exist",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const json = await result.json();
    console.log(json);
  };

  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={onSubmitTheForm}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={onChangeInput}
        />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={onChangeInput2}
        />

        <p>
          My name is: {firstName} {lastName}
        </p>
        {/* <input type="checkbox" name="happy" /> */}
        {/* <input type="radio" name="boolean" value="yes" />
        <input type="radio" name="boolean" value="nope" />
        <input type="radio" name="boolean" value="maybe" />
        <input type="radio" name="boolean" value="certainly" />
        <input type="radio" name="boolean" value="nope" /> */}
        {/* <input type="password" name="password" />
        <input type="email" name="email" /> */}
        <input type="submit" />
      </form>
    </>
  );
}
