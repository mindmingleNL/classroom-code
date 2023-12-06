import Layout from "@/components/Layout";
import ProtectedPage from "@/components/ProtectedPage";

const Protected = () => {
  return (
    <ProtectedPage>
      <Layout>
        <h1>🔒 LOGGED IN: PROTECTED PAGE!</h1>
      </Layout>
    </ProtectedPage>
  );
};

export default Protected;
