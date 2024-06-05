import { BetterButton } from "@/components/BetterButton";
import { Button } from "@/components/Button";
import { Layout } from "@/components/Layout";

export default function DetailPage() {
  return (
    <Layout title="Details!">
      <article className="article">
        <h1>This is the detail page</h1>

        <h3>Better button with variant prop</h3>
        <BetterButton label="Click me" variant="primary" />
        <hr />
        <BetterButton label="Push me" variant="secondary" />
        <hr />
        <BetterButton label="Dont slap me" variant="tertiary" />

        <h3>Old button with className</h3>
        <Button label="Click me" />
        <hr />
        <Button label="Push me" className="button--outlined" />
        <hr />
        <Button label="Dont slap me" className="button--outlined" />
      </article>
    </Layout>
  );
}
