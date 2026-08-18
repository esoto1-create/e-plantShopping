// src/components/ProductList.jsx
// Lista de plantas divididas en dos categorías.
// Cada tarjeta tiene un botón "Add to Cart" que despacha la acción a Redux
// y se deshabilita después de añadir el producto (cambiando el texto a "Added!").

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import plants from '../data/plantsData';

function ProductList() {
  const dispatch = useDispatch();
  // Estado para rastrear qué productos han sido añadidos al carrito
  const [addedItems, setAddedItems] = useState([]);

  // Filtrar por categorías
  const aromatic = plants.filter(p => p.category === 'aromatic');
  const medicinal = plants.filter(p => p.category === 'medicinal');

  const handleAddToCart = (plant) => {
    // Despachar la acción para añadir al carrito
    dispatch(addItem(plant));
    // Marcar este producto como añadido (deshabilitar su botón)
    setAddedItems((prev) => [...prev, plant.id]);
  };

  // Función para renderizar cada tarjeta de planta
  const renderPlantCard = (plant) => {
    const isAdded = addedItems.includes(plant.id);
    return (
      <div className="product-card" key={plant.id}>
        <img src={plant.image} alt={plant.name} className="plant-image" />
        <h3>{plant.name}</h3>
        <p className="description">{plant.description}</p>
        <p className="price">{plant.price.toFixed(2)} €</p>
        <button
          onClick={() => handleAddToCart(plant)}
          className="add-button"
          disabled={isAdded}
        >
          {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    );
  };

  return (
    <div className="product-list">
      <h2>🌿 Aromatic Plants</h2>
      <div className="product-grid">
        {aromatic.map((plant) => renderPlantCard(plant))}
      </div>

      <h2>🌱 Medicinal Plants</h2>
      <div className="product-grid">
        {medicinal.map((plant) => renderPlantCard(plant))}
      </div>

      {/* El Navbar está en App.jsx y es visible en todas las páginas */}
    </div>
  );
}

export default ProductList;