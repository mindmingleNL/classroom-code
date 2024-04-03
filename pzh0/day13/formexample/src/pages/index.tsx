import { Inter } from "next/font/google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const inter = Inter({ subsets: ["latin"] });

const serviceChoiceOptionsSchema = [
  z.literal("🚴 Bike rental"),
  z.literal("🚗 Car rental"),
  z.literal("🚁 Helicopter rental"),
  z.literal("🚀 Spaceship rental"),
  z.literal("🚅 Train rental"),
] as const;

const serviceChoiceOptions = serviceChoiceOptionsSchema.map(
  (option) => option.value
);

const dataFromFormSchema = z.object({
  serviceChoice: z.union(serviceChoiceOptionsSchema),
  experience: z.string().min(10),
  rentalDays: z.number().min(0),
  emotionChoice: z.union([
    z.literal("😡"),
    z.literal("😐"),
    z.literal("🙂"),
    z.literal("😁"),
  ]),
  vehicleColor: z.string(),
});

type DataFromForm = z.infer<typeof dataFromFormSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFromForm>({
    resolver: zodResolver(dataFromFormSchema),
  });

  const handleFormSubmit = (data: DataFromForm) => {
    console.log(data);
  };

  return (
    <main className={`${inter.className} `}>
      <h1>Customer feedback form</h1>
      <form className="vertical-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="service-choice">What service did you use?</label>
        <select id="service-choice" {...register("serviceChoice")}>
          {serviceChoiceOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
          {/* <option>🚴 Bike rental</option>
          <option>🚗 Car rental</option>
          <option>🚁 Helicopter rental</option>
          <option>🚀 Spaceship rental</option> */}
        </select>
        {errors.serviceChoice && (
          <p className="form-error">{errors.serviceChoice.message}</p>
        )}

        <label htmlFor="vehicle-color">What color was your vehicle?</label>
        <input
          type="color"
          id="vehicle-color"
          {...register("vehicleColor")}
        ></input>
        {errors.vehicleColor && (
          <p className="form-error">{errors.vehicleColor.message}</p>
        )}

        <label htmlFor="rental-days">How many days was your rental?</label>
        <input
          type="number"
          id="rental-days"
          {...register("rentalDays", { valueAsNumber: true })}
        ></input>
        {errors.rentalDays && (
          <p className="form-error">{errors.rentalDays.message}</p>
        )}

        <label htmlFor="experience">
          How would you describe the experience?
        </label>
        <textarea
          id="experience"
          {...register("experience")}
          placeholder="My experience was..."
        ></textarea>
        {errors.experience && (
          <p className="form-error">{errors.experience.message}</p>
        )}

        <label htmlFor="emotion-choice">
          What emotion did you feel during the rental period?
        </label>
        <select id="emotion-choice" {...register("emotionChoice")}>
          <option>😡</option>
          <option>😐</option>
          <option>🙂</option>
          <option>😁</option>
        </select>
        {errors.emotionChoice && (
          <p className="form-error">{errors.emotionChoice.message}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
