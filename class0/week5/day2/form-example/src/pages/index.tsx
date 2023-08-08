import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ErrorMessage from "@/components/ErrorMessage";

const pizzaFormValidator = z.object({
  crust: z.union([
    z.literal("Vegan"),
    z.literal("Sourdough"),
    z.literal("Hot dog crust"),
    z.literal("Cheese crust"),
  ]),
  message: z.string().min(10).includes("👍"),
  toppings: z.union([
    z.literal("Salami"),
    z.literal("Olives"),
    z.literal("Hot dog"),
    z.literal("Pineapple"),
  ]),
  chiliOil: z.boolean(),
});

type DataFromPizzaForm = z.infer<typeof pizzaFormValidator>;

export default function Home() {
  const handlePizzaFormSubmit = (data: DataFromPizzaForm) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }, // Get formState.errors and make it available
  } = useForm<DataFromPizzaForm>({
    resolver: zodResolver(pizzaFormValidator),
  });

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
          {errors.crust && <ErrorMessage message={errors.crust.message} />}

          <label htmlFor="toppings">Choose your toppings</label>
          <select id="toppings" {...register("toppings")}>
            <option>Salami</option>
            <option>Olives</option>
            <option>Hot dog</option>
            <option>Pineapple</option>
          </select>
          {errors.toppings && (
            <ErrorMessage message={errors.toppings.message} />
          )}

          <label htmlFor="chili-oil">Chili Oil?</label>
          <input
            type="checkbox"
            id="chili-oil"
            {...register("chiliOil")}
          ></input>
          {errors.chiliOil && (
            <ErrorMessage message={errors.chiliOil.message} />
          )}

          <label htmlFor="message">Any message?</label>
          <input type="text" id="message" {...register("message")}></input>
          {errors.message && <ErrorMessage message={errors.message.message} />}

          <button type="submit">Order Pizza!</button>
        </form>
      </div>
    </>
  );
}
