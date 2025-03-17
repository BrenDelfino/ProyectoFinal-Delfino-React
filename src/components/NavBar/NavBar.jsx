import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from '../Img/logo.jpg';

function NavBar() {
    return (
        <div>
            <header>
                <nav className="nav-bar">
                    <a>
                        <img src={logo} alt="Logo Washify" className="logo" />
                    </a>
                    <ul className="nav-ul">
                        <li className="nav-li">Inicio</li>
                        <li className="nav-li">Productos</li>
                        <li className="nav-li">Contacto</li>
                    </ul>
                    <CartWidget/>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;