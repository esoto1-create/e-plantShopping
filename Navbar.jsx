// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity;
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">🌱 Paradise Nursery</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Plants</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart
            {total > 0 && <span className="cart-badge">{total}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;