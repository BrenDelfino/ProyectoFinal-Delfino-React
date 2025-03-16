import Item from '../Item/Item';
import './ItemListContainer.css';

function ItemListContainer({greetings}) {
    return (
        <>
        <h1>{greetings}</h1>
        <div className="card-container">
            <Item nombre={"Washi Decorativa"} precio={5000}/>
            <Item nombre={"Cuadernillo Paperblank"} precio={10000}/>
            <Item nombre={"Dots Fríos"} precio={2000}/>
        </div>
        </>
    );
};

export default ItemListContainer;