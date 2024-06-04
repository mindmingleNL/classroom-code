import { NewsCard } from "@/components/NewsCard";

export default function Home() {
  return (
    <>
      <nav className="menu">
        <span className="menu__logo">
          N<span>O</span>S
        </span>

        <ul className="menu__main-items">
          <li className="hide-on-mobile">
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">Nieuws</a>
          </li>
          <li>
            <a href="#">Sport</a>
          </li>
          <li className="hide-on-mobile">
            <a href="#">Programmas</a>
          </li>
          <li className="hide-on-mobile">
            <a href="#">Kids News</a>
          </li>
        </ul>

        <ul className="menu__icons">
          <li>
            <a href="#">🌤️</a>
          </li>
          <li>
            <a href="#">🔍</a>
          </li>
        </ul>
      </nav>

      <div className="news-grid">
        <NewsCard title="Fake news: Trang is married" />
        <NewsCard title="The weather is shit" />
        <NewsCard title="Brandon has a time limit" />
        <NewsCard title="Nargiz is secretly a Russian spy" />
        <NewsCard title="Mark just won the Grand Prix" />
        <NewsCard title="Yoeran was late for class" />
      </div>
    </>
  );
}
