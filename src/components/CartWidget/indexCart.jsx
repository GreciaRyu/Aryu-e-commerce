import cartImg from "../../images/cart.png";
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../context/shopContext';

const CartWidget = () => {
  const {totalCartQuantity, cartQuantity, cart} = useContext(ShopContext)

  useEffect(() => {
    totalCartQuantity()
}, [])

  return(
    <div className="navbar--cart">
      <img src={cartImg} alt="carrito"></img>
      <p>{totalCartQuantity()}</p>
    </div>
  );
}

export default CartWidget