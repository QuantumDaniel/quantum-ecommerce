
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


import './Cart.css';


const Cart = ({ cartItems, setCartItems, quantity, orders, setOrders }) => {



   const date = new Date();
   const deliveryDate = new Date();



   // Calculate total price
   const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

   // Quantity array for each item


   //removing carrt items


   function removeItem(value) {


   };
   useEffect(() => {

   }, [])


   return (
      <div className="cart-container">
         <div className="cart-wrapper">
            {/* Cart Header */}
            <div className="cart-header">
               <h2 className="cart-title">Shopping Cart</h2>
               <span className="cart-item-count">({cartItems.length} items)</span>
               {cartItems.length === 0 && <strong>Your Cart is empty, click on continue shopping to add more items</strong>}
            </div>


            {/* Cart Items */}
            <div className="cart-items-list">
               {cartItems.map((item) => (

                  <div key={item.id} className="cart-item">

                     <div className="row g-3 align-items-center">
                        {/* Product Image */}
                        <div className="col-lg-2 col-md-3 col-sm-4">
                           <div className="cart-item-image-wrapper">
                              <img
                                 src={item.image}
                                 alt={item.name}
                                 className="cart-item-image"
                              />
                           </div>
                        </div>

                        {/* Product Details */}
                        <div className="col-lg-4 col-md-5 col-sm-8">
                           <div className="cart-item-details">
                              <h5 className="cart-item-name">{item.name}</h5>
                              <p className="cart-item-meta">
                                 <span className="meta-label">Color:</span>
                                 <span className="meta-value">
                                    <span
                                       className="color-dot"
                                       style={{ backgroundColor: item.color }}
                                    ></span>
                                    {item.color}
                                 </span>
                              </p>
                              <p className="cart-item-meta">
                                 <span className="meta-label">Dimensions:</span>
                                 <span className="meta-value">{item.dimensions}</span>
                              </p>
                           </div>
                        </div>

                        {/* Price */}
                        <div className="col-lg-2 col-md-2 col-sm-6">
                           <div className="cart-item-price">
                              <p className="price-label">Price</p>
                              <p className="price-value">${item.price}</p>
                           </div>
                        </div>

                        {/* Quantity */}
                        <div className="col-lg-2 col-md-2 col-sm-6">
                           <div className="cart-item-quantity">
                              <label className="quantity-label">Qty</label>
                              <span><strong>{item.quantity}</strong></span>
                              {/*
                              <select className="quantity-select" value={item.quantity} onChange={(e) => {
                                 setCartItems(cartItems.map((i) => i.id === item.id ? { ...i, quantity: parseInt(e.target.value) } : i))
                              }}>
                                 {item.quantity.map((qty) => (
                                    <option key={qty} value={qty}>
                                       {qty}
                                    </option>
                                 ))}
                              </select>
                              */}
                           </div>
                        </div>

                        {/* Subtotal */}
                        <div className="col-lg-1 col-md-2 col-sm-6">
                           <div className="cart-item-subtotal">
                              <p className="subtotal-label">Subtotal</p>
                              <p className="subtotal-value">${(item.price * item.quantity).toFixed(2)}</p>
                           </div>
                        </div>

                        {/* Delete Button */}
                        <div className="col-lg-1 col-md-2 col-sm-6">
                           <button className="btn-delete-item" title='Remove Item' onClick={() => { setCartItems(cartItems.filter(i => i.id !== item.id)) }}>
                              <i className="fas fa-trash-alt"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
               <div className="row">
                  <div className="col-lg-6 col-md-6 d-none d-md-block">
                     <div className="cart-summary-info">
                        <h5>Summary Info</h5>
                        <div className="summary-item">
                           <span className="summary-label">Subtotal:</span>
                           <span className="summary-value">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="summary-item">
                           <span className="summary-label">Shipping:</span>
                           <span className="summary-value">Free</span>
                        </div>
                        <div className="summary-item">
                           <span className="summary-label">Tax:</span>
                           <span className="summary-value">${(totalPrice * 0.1).toFixed(2)}</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                     <div className="cart-summary-total">
                        <div className="total-amount">
                           <span className="total-label">Total:</span>
                           <span className="total-price">${(totalPrice * 1.1).toFixed(2)}</span>
                        </div>

                        <button className="btn-place-order" onClick={() => {

                           setOrders([
                              ...orders, {
                                 id: cartItems.map((item) => { return item.id }),
                                 orderNumber: `#ORD-${Math.random()}`,
                                 date: date.toDateString(),
                                 status: 'Delivered',
                                 totalAmount: (totalPrice * 1.1),
                                 items: cartItems.map((item) => { return item }),
                                 deliveryDate: deliveryDate.setDate(date.getDate() + 5),
                                 trackingNumber: `TRK${Date.now()}`
                              }
                           ]);

                           setCartItems([]);

                        }} disabled={cartItems.length === 0 ? true : false}>

                           <i className="fas fa-check-circle me-2"></i>
                           Place Order
                        </button>

                        <button className="btn-continue-shopping">
                           <i className="fas fa-arrow-left me-2"></i>
                           <Link className="nav-link active text-blue brand-name" aria-current="page" to="/">Continue Shopping</Link>                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   );
};

export default Cart;
