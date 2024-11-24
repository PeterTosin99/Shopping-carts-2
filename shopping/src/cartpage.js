import React, { useState, useEffect } from 'react';
import "./css/products.css"
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 


const ProductApp = () => {
    const { addToCart,removeFromCart} = useCart(); 
    const {cart} = useCart()
    const {clearCart} = useCart()
    const [products, setproducts] = useState([]);
    const [error, seterror] = useState()
    const [ispending, setispending]=useState(true)
    const isProductInCart = (productId) => {
        return cart.some(item => item.id === productId);
      };

    useEffect(() =>{
        setTimeout(()=>{
            
            fetchproducts();
            setispending(false)
        }, 1000)
    }, []);

    const fetchproducts = async () =>{
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok){
                throw new Error('Failed to fetch the products');
            }

            const data = await response.json();
            setproducts(data);
        }catch (error){
            seterror(error.message)
        }
    }
    
    return (


<div className="App">

    <h1>Product Page</h1>
    {ispending && <div><h2>Loading....</h2></div>}
    {error && <div>{error}</div>}
    <h3>Cart: ({cart.length})</h3>
    <div className='linkbtn'>
    <button onClick={()=>clearCart()}>Clear Cart</button>
  
    <Link to="/cart"><button>Go to Cart</button></Link>
    </div>
    



    <div className="product-list">
        {products.map(product => (
            <div className="product" key={product.id}>
                
                {isProductInCart(product.id) && <FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />} {/* Display check icon */}
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <div className="linkbtn">

                <button className={`button-add ${isProductInCart(product.id) ? 'in-cart' : ''}`} onClick={() => addToCart(product)}>Add to Cart</button>
                <button className='rmvbtn' onClick={()=>removeFromCart(product.id)}>Remove</button>
                </div>
            </div>
        ))}
         
    </div>
   
    
</div>

      );
}
 


export default ProductApp;