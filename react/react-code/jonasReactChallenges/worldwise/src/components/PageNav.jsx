import { NavLink } from "react-router-dom";
import style from './PageNav.module.css'

function PageNav() {
  return (
    <div className={style.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Price</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
