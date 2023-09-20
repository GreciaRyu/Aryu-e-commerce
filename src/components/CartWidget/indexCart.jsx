import cartImg from "../../images/cart.png";
import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';

const CartWidget = () => {
  const {cartQuantity, totalCartQuantity} = useContext(ShopContext)

  totalCartQuantity()

  return(
    <div className="navbar--cart">
      <img src={cartImg} alt="carrito"></img>
      <p>{cartQuantity}</p>
    </div>
  );
}

export default CartWidget