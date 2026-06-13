import myLogo from '../assets/image.jpeg';
import { useState } from 'react';
import '../App.css';

function Home({ openModal, products }) {

  function modalDis() {
    alert('hello');
  }
  return (
    <>


      <div className="container-fluid home-container">
        <div className="row g-4">
          {products.map((pro, index) => {
            return (
              <div className="col-12 col-4 col-md-6 col-lg-4 col-sm-6 px-4 " key={pro.id}>
                <div className="card h-80 shadow-sm ">
                  <img src={pro.image} className="card-img-top images" alt="Product 1" />
                  <div><span className='span-text' onClick={() => { openModal(index) }} >View More</span>
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

                  <div className="col price-div mx-2"> <h5 className="fw-bold mb-3">${pro.price}</h5></div>

                </div>

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{pro.name}</h6>

                  <div className="text-warning mb-1">
                    {pro.rating} <small className="text-muted">({pro.ratingNumbers})</small>
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