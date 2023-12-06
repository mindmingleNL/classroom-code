import Button from "@/components/Button";
import BetterButton from "@/components/BetterButton";
import Link from "next/link";
import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function Home() {
  const textVar = "Text";
  return (
    <Layout>
      <div>
        <h1>Hello!</h1>
        <BetterButton variant="primary">
          <span>Change the {textVar}</span>
        </BetterButton>
        <BetterButton variant="secondary">Another One</BetterButton>

        <div className="card-container">
          <Card>
            <h2>Card 1</h2>
            <p>
              Est eu cillum culpa ullamco labore occaecat. Elit et magna
              excepteur irure proident sint do do tempor et sit. Minim laboris
              eiusmod consequat laboris. Aliquip aliqua ut nostrud tempor dolor
              non sint in dolor sint cillum ea pariatur qui. Officia non mollit
              duis et irure ipsum excepteur sit.
            </p>
            <BetterButton variant="primary">Click Me!</BetterButton>
          </Card>

          <Card>
            <h2>Card 1</h2>
            <p>
              Est eu cillum culpa ullamco labore occaecat. Elit et magna
              excepteur irure proident sint do do tempor et sit. Minim laboris
              eiusmod consequat laboris. Aliquip aliqua ut nostrud tempor dolor
              non sint in dolor sint cillum ea pariatur qui. Officia non mollit
              duis et irure ipsum excepteur sit.
            </p>
            <BetterButton variant="primary">Click Me!</BetterButton>
          </Card>

          <Card>
            <h2>Card 1</h2>
            <p>
              Est eu cillum culpa ullamco labore occaecat. Elit et magna
              excepteur irure proident sint do do tempor et sit. Minim laboris
              eiusmod consequat laboris. Aliquip aliqua ut nostrud tempor dolor
              non sint in dolor sint cillum ea pariatur qui. Officia non mollit
              duis et irure ipsum excepteur sit.
            </p>
            <BetterButton variant="primary">Click Me!</BetterButton>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
