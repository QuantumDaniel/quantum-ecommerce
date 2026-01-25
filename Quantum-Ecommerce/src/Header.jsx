
import myLogo from "./assets/image.jpeg"
function Header(){
    return(
        <>
       
  <div className="container-fluid d-flex align-items-center flex-nowrap gap-1 bg-primary my-0">

    <a className="navbar-brand d-flex align-items-center gap-2 m-0" href="#">
      <img src={myLogo} width="40" height="40" />
      <span className="fw-bold text-white">QuantumShop</span>
    </a> 

    <form className="d-flex flex-grow-1 mx-3">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search products..."
      />
      <button className="btn btn-outline-black bg-white text-black">Search</button>
    </form>


    <ul className="navbar-nav d-flex flex-row align-items-center gap-3 m-0">
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Orders</a>
      </li>
      <li className="nav-item">
        <a className="nav-link position-relative text-white" href="#">
          Cart
          <span className="badge bg-danger position-absolute top-1 start-100 translate-middle text-white">
            3
          </span>
        </a>
      </li>
    </ul>

  </div>
        </>
    )
};

export default Header;