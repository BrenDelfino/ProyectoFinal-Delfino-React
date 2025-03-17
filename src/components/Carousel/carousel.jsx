import "./Carousel.css";
import uno from '../Img/uno.jpg';


function Carousel() {
    return (
        <div className="carousel-container">
            <img src={uno} alt="Foto" className="bg" />
            <div className="text-overlay">¡Bienvenida a la tienda online de Washify!
                <p className="text-second">Nos complace ofrecerte una amplia variedad de productos de papelería y artículos de oficina para que encuentres todo lo que necesitas, desde cuadernos, bolígrafos, agendas hasta artículos exclusivos para tu escritorio ¡Todo a solo un clic de distancia!</p>
            </div>
        </div>
    );
};

export default Carousel;