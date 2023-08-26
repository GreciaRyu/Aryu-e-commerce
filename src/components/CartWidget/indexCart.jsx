import cart from "../../images/cart.png";

const CartWidget = () => {
  return(
    <div className="navbar--cart">
      <img src={cart} alt="carrito"></img>
      <p>1</p>
    </div>
  );
}

export default CartWidget