import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from '../Img/logo.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <header>
                <nav className="nav-bar">
                    <a>
                        <img src={logo} alt="Logo Washify" className="logo" />
                    </a>
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <Link to="/productos">
                                Productos
                            </Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/productos/cintas">
                                Cintas
                            </Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/productos/papeleria">
                                Papeleria
                            </Link>
                        </li>
                    </ul>
                    <CartWidget/>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;