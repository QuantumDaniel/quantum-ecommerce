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
  return (
    <>

      <div className="container-fluid home-container">
        <div className="row g-4">
          {products.map((products) => {
            return (
              <div className="col-12 col-6 col-md-4 col-lg-3 col-sm-6  " key={products.id}>
                <div className="card h-80 shadow-sm ">
                  <img src={products.image} className="card-img-top images" alt="Product 1" />

                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{products.name}</h6>

                    <div className="text-warning mb-1">
                      {products.rating} <small className="text-muted">({products.ratingNumbers})</small>
                    </div>
                    <h5 className="fw-bold mb-3">${products.price}</h5>

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