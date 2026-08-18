// src/components/ProductCard.jsx
// Tarjeta individual de cada planta.

import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

function ProductCard({ plant }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <h3>{plant.name}</h3>
      <p className="description">{plant.description}</p>
      <p className="price">{plant.price.toFixed(2)} €</p>
      <button onClick={handleAdd} className="add-button">
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;