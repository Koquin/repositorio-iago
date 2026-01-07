import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Portifólio</h1>
        <ul className="navbar-menu">
          <li className={location.pathname === '/projetos' ? 'active' : ''}>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li className={location.pathname === '/contatos' ? 'active' : ''}>
            <Link to="/contatos">Contatos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
