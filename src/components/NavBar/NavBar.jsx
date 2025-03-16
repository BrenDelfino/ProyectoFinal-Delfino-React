import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <header>
                <nav className="nav-bar">
                    <p>logo</p>
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