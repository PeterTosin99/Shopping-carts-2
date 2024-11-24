
import { useCart } from "./CartContext";
import "./css/products.css"
import { Link } from "react-router-dom";
import generatePDF from './generatePDF';

const Displaycart = () => {
    const {cart} = useCart()
    const {removeFromCart} = useCart();
    return ( 

<div>
      <h2>Cart Page</h2>
      <div className="linkbtn">
        <Link to="/checkout"><button>Check out</button></Link>
        <Link to="/products"><button>Back to Products</button></Link>
        <button onClick={() => generatePDF(cart)}>Download Cart Summary as PDF</button> {/* Button to download PDF */}
        </div>
      <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="product-list">
          {cart.map(item => (
            
            <div className="product" key={item.id}>
               
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={()=>removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

</div>
    </div>
        


     );
}
 
export default Displaycart;