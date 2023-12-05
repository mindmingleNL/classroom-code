import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const dataFromPresentFormValidator = z.object({
  itemName: z.string().min(1),
  prio: z.union([
    z.literal("Not so important"),
    z.literal("Neutral"),
    z.literal("I will die if I dont get it!"),
  ]),
  quantity: z.number().int().positive(),
  when: z.string().min(1),
});

type DataFromPresentForm = z.infer<typeof dataFromPresentFormValidator>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFromPresentForm>({
    resolver: zodResolver(dataFromPresentFormValidator),
  });

  //   const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  //     const nameFromForm = event.currentTarget.itemName.value;
  //     const prioFromForm = event.currentTarget.prio.value;

  //     // We don't normally just console log (normally we POST or PATCH)
  //     console.log(nameFromForm, prioFromForm);
  //   };

  const handleDataFromFrom = (data: DataFromPresentForm) => {
    console.log(data);
  };

  return (
    <>
      <h1>Wishlist for Sinterklaas</h1>

      <form className="item-form" onSubmit={handleSubmit(handleDataFromFrom)}>
        <label htmlFor="itemName">Name</label>
        <input type="text" id="itemName" {...register("itemName")} />
        {errors.itemName && (
          <p className="error-msg">{errors.itemName.message}</p>
        )}

        <label htmlFor="prio">Priority</label>
        <select id="prio" {...register("prio")}>
          <option>Not so important</option>
          <option>Neutral</option>
          <option>I will die if I dont get it!</option>
        </select>
        {errors.prio && <p className="error-msg">{errors.prio.message}</p>}

        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          {...register("quantity", { valueAsNumber: true })}
        />
        {errors.quantity && (
          <p className="error-msg">{errors.quantity.message}</p>
        )}

        <label htmlFor="when">When</label>
        <input id="when" {...register("when")} />
        {errors.when && <p className="error-msg">{errors.when.message}</p>}

        <button type="submit">Submit 🥕</button>
      </form>
    </>
  );
};

export default Form;
