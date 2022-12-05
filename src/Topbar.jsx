import logo from "./assets/brand.png";
import searchIcon from "./assets/search.png";
import cartIcon from "./assets/cart.png";

export const Topbar = () => (
  <header className="flex container nav">
    <div className="flex brand">
      <p>Nike</p>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
    <nav>
      <ul className="flex">
        <li className="active pointer">Men</li>
        <li className="pointer">Women</li>
        <li className="pointer">Kids</li>
        <li className="pointer">Customize </li>
      </ul>
    </nav>
    <div className="cart-plus flex">
      <div className="flex search">
        <span>
          <img src={searchIcon} alt="search icon" />
        </span>
        <input type="text" placeholder="Search" />
      </div>
      <span>
        <img src={cartIcon} alt="" />
      </span>
    </div>
  </header>
);
