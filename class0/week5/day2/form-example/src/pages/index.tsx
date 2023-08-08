import { useForm } from "react-hook-form";

interface DataFromPizzaForm {
  message: string;
  crust: "Vegan" | "Sourdough" | "Hot dog crust" | "Cheese crust";
  toppings: "Salami" | "Olives" | "Hot dog" | "Pineapple";
  chiliOil: boolean;
}

export default function Home() {
  const handlePizzaFormSubmit = (data: DataFromPizzaForm) => {
    console.log(data);
  };

  const { register, handleSubmit } = useForm<DataFromPizzaForm>();

  return (
    <>
      <h1>Hello forms!</h1>
      <div>
        <form id="main-form" onSubmit={handleSubmit(handlePizzaFormSubmit)}>
          <label htmlFor="crust">Choose your crust</label>
          <select id="crust" {...register("crust")}>
            <option>Vegan</option>
            <option>Sourdough</option>
            <option>Hot dog crust</option>
            <option>Cheese crust</option>
            <option>bal</option>
          </select>

          <label htmlFor="toppings">Choose your toppings</label>
          <select id="toppings" {...register("toppings")}>
            <option>Salami</option>
            <option>Olives</option>
            <option>Hot dog</option>
            <option>Pineapple</option>
          </select>

          <label htmlFor="chili-oil">Chili Oil?</label>
          <input
            type="checkbox"
            id="chili-oil"
            {...register("chiliOil")}
          ></input>

          <label htmlFor="message">Any message?</label>
          <input
            type="text"
            id="message"
            {...(register("message"), { required: true })}
          ></input>

          <button type="submit">Order Pizza!</button>
        </form>
      </div>
    </>
  );
}
