import  myLogo from '../assets/image.jpeg';

function Home(){
    return(
        <>
       <div className="container-fluid home-container ">
  <div className="row g-4">

    <div className="col-6 col-md-4 col-lg-3">
      <div className="card h-80 shadow-sm">
        <img src = "src/assets/laptop casing.jpg" className="card-img-top" alt="Product 1" />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Laptop Casing</h6>

          <div className="text-warning mb-1">
            ★★★★☆ <small className="text-muted">(4.2)</small>
          </div>
          <h5 className="fw-bold mb-3">$79.99</h5>

          <button className="btn btn-primary mt-auto w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div className="col-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img src="src/assets/laptop3.jpg" className="card-img-top" alt="Product 2" />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Laptop</h6>

          <div className="text-warning mb-1">
            ★★★★★ <small className="text-muted">(5.0)</small>
          </div>

          <h5 className="fw-bold mb-3">$129.99</h5>

          <button className="btn btn-primary mt-auto w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div className="col-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img src="src/assets/mouse.jpg" className="card-img-top" alt="Product 3" />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Mouse</h6>

          <div className="text-warning mb-1">
            ★★★★☆ <small className="text-muted">(4.0)</small>
          </div>

          <h5 className="fw-bold mb-3">$49.99</h5>

          <button className="btn btn-primary mt-auto w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img src="src/assets/latptop1.webp" className="card-img-top" alt="Product 4" />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Laptop</h6>

          <div className="text-warning mb-1">
            ★★★☆☆ <small className="text-muted">(3.5)</small>
          </div>

          <h5 className="fw-bold mb-3">$29.99</h5>

          <button className="btn btn-primary mt-auto w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  </div>

     <div className="row g-4">

    <div className="col-6 col-md-4 col-lg-3">
      <div className="card h-80 shadow-sm">
        <img src = "src/assets/laptop casing.jpg" className="card-img-top" alt="Product 1" />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Laptop Casing</h6>

          <div className="text-warning mb-1">
            ★★★★☆ <small className="text-muted">(4.2)</small>
          </div>
          <h5 className="fw-bold mb-3">$79.99</h5>

          <button className="btn btn-primary mt-auto w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div className="col-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img src="src/assets/laptop3.jpg" className="card-img-top" alt="Product 2" />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Laptop</h6>

          <div className="text-warning mb-1">
            ★★★★★ <small className="text-muted">(5.0)</small>
          </div>

          <h5 className="fw-bold mb-3">$129.99</h5>

          <button className="btn btn-primary mt-auto w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div className="col-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img src="src/assets/mouse.jpg" className="card-img-top" alt="Product 3" />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Mouse</h6>

          <div className="text-warning mb-1">
            ★★★★☆ <small className="text-muted">(4.0)</small>
          </div>

          <h5 className="fw-bold mb-3">$49.99</h5>

          <button className="btn btn-primary mt-auto w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img src="src/assets/latptop1.webp" className="card-img-top" alt="Product 4" />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Laptop</h6>

          <div className="text-warning mb-1">
            ★★★☆☆ <small className="text-muted">(3.5)</small>
          </div>

          <h5 className="fw-bold mb-3">$29.99</h5>

          <button className="btn btn-primary mt-auto w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

        
        
        </>
    )
};
export default Home;        