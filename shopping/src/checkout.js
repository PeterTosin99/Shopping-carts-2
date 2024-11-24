import { Link } from "react-router-dom";
import { useCart } from "./CartContext";


const Checkout = () => {
    const {cart} = useCart()
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);

        const handleCheckout = () => {
          alert(`Total products: ${cart.length}\nTotal amount: $${totalPrice}`);
        };
      
        return (
          <div>
            <h2>Checkout Page</h2>
            <div className="product-list">
            {cart.map(item => (
                <div className="product" key={item.id}>
                    <p>{item.id}</p>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
            ))}
            </div>
            <h3>Number of products {cart.length}</h3>
            <h2>Total Price: ${totalPrice}</h2>
            <div className="linkbtn">
            <button onClick={handleCheckout}>Pay</button>
            <Link to="/cart"><button>Back to Cart</button></Link>
            </div>
            {/* <p><a href="#">Download Invoice</a></p> Placeholder for invoice */}
          </div>
        );

}
 
export default Checkout;