export const Navigation = () => {
  return (
    <nav className="menu">
      <span className="menu__logo">
        N<span>oooO</span>S
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
  );
};
