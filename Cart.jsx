// src/components/Cart.jsx
// Página del carrito completa: lista de items, total y botones.

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity;
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add some plants first!');
      return;
    }
    dispatch(clearCart());
    alert('Thank you for your purchase! Come back soon.');
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Start shopping!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: {total.toFixed(2)} €</h3>
            <div className="cart-actions">
              <Link to="/products">
                <button className="continue-btn">Continue Shopping</button>
              </Link>
              <button onClick={handleCheckout} className="checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;