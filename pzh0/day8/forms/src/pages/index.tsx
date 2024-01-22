import { FormEvent, useState } from "react";

const FormTitle = () => {
  useState();
  return <h1>Hello Forms</h1>;
};

// FormEvent<HTMLFormElement>
export default function Home() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      const submitted = {
        username: event.currentTarget.username.value,
        mail: event.currentTarget.mail.value,
        password: event.currentTarget.password.value,
        spice: event.currentTarget.spice.value,
        breadType: event.currentTarget.breadType.value,
        age: event.currentTarget.age.value,
      };
      if (submitted.password.length < 5) {
        setError("Password needs to be longer than 5 characters!");
      }
      console.log(submitted);
    } catch {
      console.log("Oops");
    }
  };

  return (
    <>
      <FormTitle />
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Your name</label>
          <input type="text" id="username" />
        </div>
        <div className="form-field">
          <label htmlFor="mail">Email</label>
          <input type="email" id="mail" />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="form-field">
          <label htmlFor="age">age</label>
          <input type="number" id="age" />
        </div>
        <div>
          <label htmlFor="mild">Mild</label>
          <input type="radio" name="spice" id="mild" value="mild" />

          <label htmlFor="medium">Medium</label>
          <input type="radio" name="spice" id="medium" value="medium" />

          <label htmlFor="spicy">Spicy</label>
          <input type="radio" name="spice" id="spicy" value="spicy" />
        </div>
        <label htmlFor="breadType">Bread type:</label>
        <select id="breadType" name="breadType">
          <option value="wheat">Whole wheat</option>
          <option value="herb">Herb</option>
          <option value="white">White</option>
          <option value="brown">Brown</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  );
}
