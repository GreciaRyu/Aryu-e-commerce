import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const ItemCount = ({stock, item}) =>{
    const {addToCart} = useContext(ShopContext)    
    const [quantity, setQuantity] = useState(1)

    const sumar= () => {
        if (quantity<stock) {
            setQuantity(quantity+1)
        }}

    const restar= () => {
        if (quantity>1) {
            setQuantity(quantity-1)
        }}

    return(
        <>
            <div className='d-flex justify-content-evenly'>
            <h5>Cantidad</h5>
                <Button variant="dark" onClick={restar}>-</Button>
                <h4>{quantity}</h4>
                <Button variant="dark" onClick={sumar}>+</Button>
            </div>
            <div className='d-flex justify-content-around'>
                <Button variant="light" /*as={Link} to={``}*/disabled={!stock}>
                    Comprar
                </Button>
                <Button variant="light" onClick={()=> addToCart(item,quantity)} disabled={!stock}>
                    Agregar al carrito
                </Button>
            </div>
        </>
    )
}

export default ItemCount
