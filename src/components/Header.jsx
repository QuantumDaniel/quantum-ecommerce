import { Link } from 'react-router-dom';
import { useState } from 'react';
import App from '../App.jsx'
import myLogo from "../assets/logo.png"
import '../App.css';
function Header({ cart, setCart }) {
  const [change, setChange] = useState('Home');

  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-primary position-fixed top-0 z-3">
          <img loading='lazy' src={myLogo} className="img-fluid " width="40" height="40" alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item `} onClick={() => { setChange('Home') }}>
                <Link className={`nav-link active text-white brand-name  ${change === 'Home' ? 'color' : ''} `} aria-current="page" to="/">QuantumShop</Link>
              </li>
              <li className="nav-item" onClick={() => { setChange('Order') }}>
                <Link className={`nav-link text-white ${change === 'Order' ? 'color' : ''}`} to="orders" >Orders</Link>
              </li>
              <li className="nav-item dropdown" onClick={() => { setChange('Cart') }}>
                <Link className={`nav-link text-white ${change === 'Cart' ? 'color' : ''}`} to="cart" >
                  <img loading='lazy' src="/cart-icon.png" alt="cart-icon" height="20px" />
                  <span className="badge  position-absolute top-1 start-50 translate-middle text-white">
                    {cart}
                  </span>

                </Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn me-4 btn-outline-success bg-white text-black" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


    </>
  )
};

export default Header;