import "./Navbar.css";
import CartWidgets from "../CartWidgets/CartWidgets";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <div className="productos">
        <ul>
          <li>
            <NavLink className={(estatus) => estatus.isActive ? 'activo' : 'inactivo'} to="/">
            Todos los productos
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')} to="/category/dog">
            Alimento para perros
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')} to="/category/cat">
            Alimento para gatos
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')} to="/category/others">
            Accesorios varios
            </NavLink>
          </li>
          <li>
            <CartWidgets />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
