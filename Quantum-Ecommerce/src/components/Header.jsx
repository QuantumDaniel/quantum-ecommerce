import { Link } from 'react-router-dom';
import App from '../App.jsx'
import myLogo from "../assets/logo.png"
import '../App.css';
function Header() {
  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-primary position-fixed top-0 z-3">
          <Link className="navbar-brand" to="/"><img src={myLogo} class="img-fluid " width="40" height="40" alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white brand-name" aria-current="page" to="/">QuantumShop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="orders">Orders</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="/src/assets/cart-icon.png" alt="cart-icon" height="20px" />
                  <span className="badge  position-absolute top-1 start-50 translate-middle text-white">
                    3
                  </span>
                </a>
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