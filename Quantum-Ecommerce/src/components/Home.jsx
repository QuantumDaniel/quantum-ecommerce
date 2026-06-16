import myLogo from '../assets/image.jpeg';
import { useState } from 'react';
import '../App.css';

function Home({ openModal, products, quantity, setQuantity, quantityChange, setCartItems, addCart, cartItems }) {




  return (
    <>


      <div className="container-fluid home-container">
        <div className="row g-4">
          {products.map((pro, index) => {
            return (
              <div className="col-12 col-4 col-md-6 col-lg-4 col-sm-6 px-4 " key={pro.id}>
                <div className="card h-80 shadow-sm ">
                  <img src={pro.image} className="card-img-top images" alt="Product 1" />
                  <div><span className='span-text' onClick={() => { openModal(index) }}  >View More</span>
                    <select className="form-select w-auto "
                      onChange={(e) => quantityChange(pro.id, e)}


                      style={{ height: "30px" }}>
                      {pro.quantityAvailable2.map((qty) => (
                        <option value={qty} key={qty}>
                          {qty}
                        </option>
                      ))}
                    </select></div>

                  <div className="col price-div mx-2"> <h5 className="fw-bold mb-3">${pro.price}</h5></div>

                </div>

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{pro.name}</h6>

                  <div className="text-warning mb-1">
                    {pro.rating} <small className="text-muted">({pro.ratingNumbers})</small>
                  </div>
                  <div className="row">

                    <button className="btn btn-primary mt-auto w-100" onClick={() => {
                      setCartItems(
                        [
                          ...cartItems, {
                            id: pro.id,
                            name: pro.name,
                            price: pro.price,
                            quantity: pro.quantity,
                            image: pro.image,
                            color: '#FF6B6B',
                            dimensions: '15cm x 10cm'


                          }
                        ]
                      )
                    }} >
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