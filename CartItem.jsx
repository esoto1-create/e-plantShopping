// src/components/CartItem.jsx
// Componente que representa cada tipo de planta en el carrito.
// Muestra imagen, nombre, precio unitario, subtotal (precio * cantidad),
// botones para incrementar/decrementar y eliminar.
// Cuando la cantidad llega a 0, el artículo se elimina automáticamente.

import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../features/cartSlice';

function CartItem({ item, cartItems = [] }) {
  const dispatch = useDispatch();

  // Calcular el subtotal para este artículo
  const subtotal = item.price * item.quantity;

  // Calcular el total del carrito a partir de los artículos actuales.
  // Se recalcula automáticamente cuando cambian las cantidades.
  const cartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  // Manejar decremento: si la cantidad es 1, eliminamos el artículo
  const handleDecrement = () => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(decrement(item.id));
    }
  };

  // Manejar incremento
  const handleIncrement = () => {
    dispatch(increment(item.id));
  };

  // Manejar eliminación directa
  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Unit price: {item.price.toFixed(2)} €</p>
        <p>Subtotal: {subtotal.toFixed(2)} €</p>

        <div className="quantity-controls">
          <button onClick={handleDecrement} aria-label={`Decrease ${item.name} quantity`}>
            -
          </button>

          <span className="quantity">{item.quantity}</span>

          <button onClick={handleIncrement} aria-label={`Increase ${item.name} quantity`}>
            +
          </button>

          <button onClick={handleRemove} className="delete-btn">
            Delete
          </button>
        </div>
      </div>

      <p className="cart-total">
        Total: {cartTotal.toFixed(2)} €
      </p>
    </div>
  );
}

export default CartItem;
