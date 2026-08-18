// src/components/Landing.jsx
// Esta es la página de inicio. Muestra el nombre de la empresa y el botón "Get Started".

import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing">
      <h1>🌱 Paradise Nursery</h1>
      <p>Encuentra tu planta perfecta y dale vida a tu hogar.</p>
      <p>Tenemos aromáticas, medicinales y mucho más.</p>
      <Link to="/products">
        <button className="cta-button">Get Started</button>
      </Link>
    </div>
  );
}

export default Landing;