import { Link } from 'react-router-dom';
import App from '../App.jsx'
import myLogo from "../assets/logo.png"
function Header(){
    return(
        <>
       
  <div className="container-fluid d-flex align-items-center flex-nowrap gap-1 bg-primary my-0 header">

    <Link className="navbar-brand d-flex align-items-center gap-2 m-0" to = "/">
      <img src={myLogo} width="40" height="40" />
      <span className="fw-bold text-white">QuantumShop</span>
    </Link> 

    <form className="d-flex flex-grow-1 mx-3 ">
      <input
        className="form-control me-2 search-box"
        type="search"
        placeholder="Search products..."
      />
      <button className="btn btn-outline-black bg-white text-black search-btn">Search</button>
    </form>


    <ul className="navbar-nav d-flex flex-row align-items-center gap-3 m-0">
      <li className="nav-item">
        <Link to = "/orders" className="nav-link text-white" >Orders</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link position-relative text-white" to = "/cart">
          Cart
          <span className="badge  position-absolute top-1 start-100 translate-middle text-white">
            3
          </span>
        </Link>
      </li>
    </ul>

  </div>
        </>
    )
};

export default Header;