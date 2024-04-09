import { cartContext } from "../../Contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './cart.css'
const Cart = () => {
    const { myCart, total, addToCart, setTotal } = useContext(cartContext);
    const navigate = useNavigate();
    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}]);
    }
    const handleHome = () => {
        navigate('/');;
    }
    return ( 
        <>
            <section className="cart-container">
                <div className="cart-hearder"> CHECKOUT: </div>
                <div className="cart-items">
                    {myCart.slice(1).map((item) => {
                        return (
                            <div className="cart-item">
                                <div className="cart-item-img">
                                    <img src={item.imageUrl} alt={`picture of: ${item.name}`} className="cart-item-img" />
                                </div>
                                {item.name} : {item.price}
                            </div>
                        )
                    })}
                    <div className="cart-total">
                        <p>Total: {total}</p>
                    </div>
                </div>
                <button className="cart-checkout" onClick={handleCheckout}> Done </button>
                <button className="cart-checkout" onClick={handleHome}> Home</button>
            </section>
        </>
     );
}
 
export default Cart;