export default function Flexbox() {
  return (
    <main className="flex-layout">
      <nav className="flex-menu">Menu</nav>

      <article className="flex-content">
        <h1>Flexbox & Grid</h1>

        <div className="flex-container">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item ABC</div>
          <div className="flex-item specific-item">Item 2</div>
          <div className="flex-item">Item 2</div>
          <div className="flex-item">Item 2</div>
        </div>

        <div className="grid-container">
          <div className="grid-item">
            Grid item 1<br />
            With two lines
          </div>
          <div className="grid-item">Grid item 2</div>
          <div className="grid-item">Grid item 3</div>
          <div className="grid-item">Grid item 4</div>
          <div className="grid-item">Grid item 5</div>
          <div className="grid-item">Grid item 6</div>
        </div>
      </article>

      <footer>Copyright 2024</footer>
    </main>
  );
}
