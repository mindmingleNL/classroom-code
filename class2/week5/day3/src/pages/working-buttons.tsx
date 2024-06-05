import { ButtonThatWorks } from "@/components/ButtonThatWorks";
import { Layout } from "@/components/Layout";
import { ModalButtons } from "@/components/ModalButtons";

export default function DetailPage() {
  return (
    <Layout title="Working buttons">
      <article className="article">
        <ModalButtons
          title="hoahaoa"
          onClick={(action) => {
            alert(`Action: ${action}`);
          }}
          // onCancel={() => {
          //   alert("Cancelled");
          // }}
        />
        <hr />

        <ButtonThatWorks
          label="Dont slap me"
          className="button--outlined"
          onClick={() => {
            alert("Hi from first button!");
          }}
        />
        <hr />
        <ButtonThatWorks
          label="Dont slap me"
          className="button--outlined"
          onClick={() => {
            alert("Hi from second button!");
          }}
        />
        <hr />
        <ButtonThatWorks
          label="Dont slap me"
          className="button--outlined"
          onClick={() => {
            alert("Hi from third button!");
          }}
        />
        <hr />
        <ButtonThatWorks
          label="Dont slap me"
          className="button--outlined"
          onClick={() => {
            alert("Hi from fourth button!");
          }}
        />
        <hr />
      </article>
    </Layout>
  );
}
