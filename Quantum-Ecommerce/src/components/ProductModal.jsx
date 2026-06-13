
import './ProductModal.css';
import { useState } from 'react';




const ProductModal = ({ pro, stars, closeModal }) => {
    function decrement() {
        setCount(count - 1);
        if (count <= 1) {
            setCount(1);
        }
    }
    function increment() {
        setCount(count + 1);
        if (count >= pro.quantityAvailable) {
            setCount(pro.quantityAvailable);
        }
    }
    // Dimension labels
    const dimensionLabels = ['Length', 'Width', 'Height'];
    const [count, setCount] = useState(1);

    return (
        <div className="product-modal-overlay">
            <div className="product-modal-container">
                <button
                    type="button"
                    className="btn-close product-modal-close"
                    aria-label="Close"
                    onClick={closeModal}
                ></button>

                <div className="modal-body-custom">
                    <div className="row g-4">
                        {/* Product Image Section */}
                        <div className="col-lg-6">
                            <div className="product-image-wrapper">
                                <img
                                    src={pro.image}
                                    alt={pro.name}
                                    className="product-image-modal"
                                />
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="col-lg-6">
                            <div className="product-details-wrapper">
                                {/* Product Name */}
                                <h2 className="product-title">{pro.name}</h2>

                                {/* Rating Section */}
                                <div className="rating-section mb-3">
                                    <div className="stars">
                                        {stars.map((star) => (
                                            <i
                                                key={star}
                                                className={`fas fa-star ${star <= pro.rating ? 'filled' : ''
                                                    }`}
                                            ></i>
                                        ))}
                                    </div>
                                    <span className="review-count ms-2">({pro.reviews} reviews)</span>
                                </div>

                                {/* Price Section */}
                                <div className="price-section mb-4">
                                    <h3 className="product-price">${pro.price}</h3>
                                    <span className="original-price">${pro.originalPrice}</span>
                                    <span className="discount-badge">{pro.discount}% OFF</span>
                                </div>

                                {/* Availability */}
                                <div className="availability-section mb-4">
                                    <p className="availability-text">
                                        <strong>Availability:</strong>{' '}
                                        <span className="in-stock">
                                            {pro.quantityAvailable} items available
                                        </span>
                                    </p>
                                </div>

                                {/* Colors Available */}
                                <div className="colors-section mb-4">
                                    <label className="section-label">Available Colors:</label>
                                    <div className="colors-container">
                                        {pro.colors.map((color, index) => (
                                            <button
                                                key={index}
                                                className="color-option"
                                                style={{ backgroundColor: color }}
                                                title={color}
                                            ></button>
                                        ))}
                                    </div>
                                </div>

                                {/* Dimensions */}
                                <div className="dimensions-section mb-4">
                                    <label className="section-label">Dimensions:</label>
                                    <div className="dimensions-grid">
                                        {pro.dimensions.map((dimension, index) => (
                                            <div key={index} className="dimension-item">
                                                <span className="dimension-label">{dimensionLabels[index]}:</span>
                                                <span className="dimension-value">{dimension}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity Section */}
                                <div className="quantity-section mb-4">
                                    <label className="section-label">Quantity:</label>
                                    <div className="quantity-controls">
                                        <button className="qty-btn" onClick={decrement}>
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            className="qty-input"
                                            defaultValue="1"
                                            min="1"
                                            value={count}
                                        />
                                        <button className="qty-btn" onClick={increment}>
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="action-buttons">
                                    <button className="btn btn-primary btn-add-to-cart">
                                        <i className="fas fa-shopping-cart me-2"></i>
                                        Add to Cart
                                    </button>
                                    <button className="btn btn-outline-secondary btn-wishlist">
                                        <i className="fas fa-heart me-2"></i>
                                        Wishlist
                                    </button>
                                </div>

                                {/* Product Description */}
                                <div className="description-section mt-4 pt-4 border-top">
                                    <h5>Product Description</h5>
                                    <p className="product-description">{pro.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
