import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const agregarAlCarrito = (producto) => {
        if (carrito.some(el => el.id === producto.id)) {
            const newCarrito = carrito.map(el => {
                if (el.id === producto.id) {
                    return {
                        ...el,
                        cantidad: el.cantidad + producto.cantidad,
                    };
                }
                return el;
            });
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, producto]);
        }
        setTotalAmount(prevAmount => prevAmount + producto.precio * producto.cantidad);
    };

    const getTotalAmount = () => totalAmount;

    const resetCart = () => {
        setCarrito([]);
        setTotalAmount(0);
    };

    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito, resetCart, getTotalAmount }}>
            {props.children}
        </AppContext.Provider>
    );
};