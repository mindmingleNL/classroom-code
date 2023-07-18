import Image from "next/image";

interface VacuumCardProps {
  id: number;
  name: string;
  reviews: number;
  type: string;
  suction_power: string;
  floor_type: string[];
  retail_price: number;
  availability: string;
  pickup: string;
}

const VacuumCard = (props: VacuumCardProps) => {
  const name = props.name;
  const retail_price = props.retail_price;
  const type = props.type;
  const suction_power = props.suction_power;
  const floor_type = props.floor_type;

  return (
    <div className="vacuum-card box-shadow">
      <h1>{name}</h1>
      <div className="vacuum-price">
        <Image
          className="dollar-sign"
          src="https://media1.giphy.com/media/l41YoVcd7UhOWIDBK/giphy.gif"
          alt="Dollar Sign"
          width={30}
          height={30}
        />
        <h2>{retail_price}</h2>
      </div>
      <p>Type: {type}</p>
      <p>Suction Power: {suction_power}</p>
      <p>Floor Type:</p>
      <ul>
        {floor_type.map((type) => (
          <li>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default VacuumCard;
