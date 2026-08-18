// src/components/CartItem.jsx
// Representa un tipo de planta en el carrito.
// Muestra miniatura, precio unitario, subtotal, botones + / - y eliminar.

import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../features/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Unit price: {item.price.toFixed(2)} €</p>
        <p>Subtotal: {subtotal} €</p>
        <div className="quantity-controls">
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <span className="quantity">{item.quantity}</span>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;