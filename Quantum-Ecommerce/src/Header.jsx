
import myLogo from "./assets/image.jpeg"
function Header(){
    return(
        <>
       
  <div class="container-fluid d-flex align-items-center flex-nowrap gap-1 bg-primary my-0">

    <a class="navbar-brand d-flex align-items-center gap-2 m-0" href="#">
      <img src={myLogo} width="40" height="40" />
      <span class="fw-bold">QuantumShop</span>
    </a>

    <form class="d-flex flex-grow-1 mx-3">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search products..."
      />
      <button class="btn btn-outline-black bg-white text-black">Search</button>
    </form>


    <ul class="navbar-nav d-flex flex-row align-items-center gap-3 m-0">
      <li class="nav-item">
        <a class="nav-link" href="#">Orders</a>
      </li>
      <li class="nav-item">
        <a class="nav-link position-relative" href="#">
          Cart
          <span class="badge bg-danger position-absolute top-1 start-100 translate-middle">
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