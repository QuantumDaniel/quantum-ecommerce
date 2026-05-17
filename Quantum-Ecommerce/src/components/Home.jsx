import myLogo from '../assets/image.jpeg';
import { useState } from 'react';
import '../App.css';

function Home() {
  const [products, setProducts] = useState([
    {
      image: "src/assets/laptop-casing.jpg ",
      name: "Laptop Casing",
      rating: "★★★★☆ ",
      ratingNumbers: "4.2",
      price: "79.99 ",
      id: 1
    },

    {
      image: "src/assets/laptop3.jpg ",
      name: "Laptop",
      rating: "★★★★★☆ ",
      ratingNumbers: "5.2",
      price: "79.99 ",
      id: 2
    },

    {
      image: "src/assets/mouse.jpg ",
      name: "Mouse",
      rating: "★★★☆ ",
      ratingNumbers: " 3.2",
      price: "79.99 ",
      id: 3
    },

    {
      image: "src/assets/latptop1.webp ",
      name: "Laptop Casing",
      rating: "★★★★☆ ",
      ratingNumbers: " 4.2",
      price: "80.99 ",
      id: 4
    },
    {
      image: "src/assets/laptop-casing.jpg ",
      name: "Laptop Casing",
      rating: "★★★☆ ",
      ratingNumbers: "3.2",
      price: "89.99 ",
      id: 5
    },

    {
      image: "src/assets/laptop3.jpg ",
      name: "Laptop",
      rating: "★★★★☆ ",
      ratingNumbers: "4.2",
      price: "39.99 ",
      id: 6
    },

    {
      image: "src/assets/mouse.jpg ",
      name: "Mouse",
      rating: "★★★★☆ ",
      ratingNumbers: " 4.2",
      price: "79.99 ",
      id: 7
    },

    {
      image: "src/assets/latptop1.webp ",
      name: "Laptop",
      rating: "★★★★☆ ",
      ratingNumbers: " 4.2",
      price: "49.99 ",
      id: 8
    }
  ]);

  function modalDis() {
    alert('hello');
  }
  return (
    <>

      <div className="container-fluid home-container">
        <div className="row g-4">
          {products.map((products) => {
            return (
              <div className="col-12 col-6 col-md-4 col-lg-3 col-sm-6 px-4 " key={products.id}>
                <div className="card h-80 shadow-sm ">
                  <img src={products.image} className="card-img-top images" alt="Product 1" />
                  <div><span className='span-text' onClick={modalDis}>View More</span>
                    <select className="form-select w-auto"
                      style={{ height: "30px" }}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select></div>

                  <div className="col price-div mx-2"> <h5 className="fw-bold mb-3">${products.price}</h5></div>

                </div>

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{products.name}</h6>

                  <div className="text-warning mb-1">
                    {products.rating} <small className="text-muted">({products.ratingNumbers})</small>
                  </div>
                  <div className="row">

                    <button className="btn btn-primary mt-auto w-100">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
};
export default Home;        