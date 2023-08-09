import WithSayHi from "@/components/WithSayHi";

const Two = () => {
  return (
    <WithSayHi>
      <WithSayHi>
        <h1>I am page two!</h1>
      </WithSayHi>
    </WithSayHi>
  );
};

export default Two;
