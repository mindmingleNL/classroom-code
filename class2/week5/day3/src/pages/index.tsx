import { Layout } from "@/components/Layout";
import { NewsCard } from "@/components/NewsCard";

export default function Home() {
  return (
    <Layout title="Goodmorning">
      <div className="news-grid">
        <NewsCard title="Fake news: Trang is married" content="Hello" />
        <NewsCard title="The weather is shit" content="The weather" />
        <NewsCard title="Brandon has a time limit" content="A time limit." />

        <NewsCard
          title="Nargiz is secretly a Russian spy"
          content="Russian Spy"
        >
          <h4>Hello</h4>
          <p>Hallo again</p>
        </NewsCard>

        <NewsCard title="Mark just won the Grand Prix" content="Grand Prix" />
        <NewsCard title="Yoeran was late for class" content="Traffic jams" />
      </div>
    </Layout>
  );
}
