import { Link } from "react-router-dom";
import { useCart } from './CartContext';
const NavBar = ({cartLength}) => {
  const { cart } = useCart(); 

  

    return ( 
        <>
    <nav className="navbar">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart({cart.length})</Link>
        </li>
      </ul>
      </nav>
        </>
     );
}
 
export default NavBar;