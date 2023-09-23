import { useState,  useContext } from "react";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <div className='d-flex align-items-center justify-items-center'>
            <h5 className='mx-2'>Cantidad:</h5>
                <Stack direction="horizontal" gap={2} className="mx-2">
                    <Button variant="dark" onClick={restar}>-</Button>
                    <h5>{quantity}</h5>
                    <Button variant="dark" onClick={sumar}>+</Button>
                    <div>
                        <Button variant="light" onClick={()=> addToCart(item,quantity)} 
                        as={Link} to={"/cart"} disabled={!stock} className='ms-2'>
                            Comprar
                        </Button>
                        <Button variant="light" onClick={()=> addToCart(item,quantity)} d
                        isabled={!stock} className='ms-2'>
                            Agregar al carrito
                    </Button> 
                    </div>  
                </Stack>
            </div>
        </>
    )
}

export default ItemCount
