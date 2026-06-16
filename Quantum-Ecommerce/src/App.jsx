//import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Cart from "./pages/Cart";
import Orders from "./pages/Orders"
import ProductModal from './components/ProductModal';
function App() {



  const [products, setProducts] = useState([{
    name: 'Laptop Casing',
    price: 129.99,
    originalPrice: 179.99,
    discount: 27,
    quantityAvailable: 5,
    quantityAvailable2: [1, 2, 3, 4, 5],
    quantity: 1,
    image: './laptop-casing.jpg',
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    dimensions: ['20cm', '18cm', '8cm'],
    rating: 4,
    reviews: 128,
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    rating: "★★★★☆ ",
    ratingNumbers: "4.2",
    id: 'product1'
  },

  {
    name: 'Asus Laptop',
    price: 150.99,
    originalPrice: 180.2,
    discount: 12,
    quantityAvailable: 5,
    quantity: 1,
    quantityAvailable2: [1, 2, 3, 4, 5],
    image: "src/assets/laptop3.jpg ",
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    dimensions: ['20cm', '18cm', '8cm'],
    rating: 9,
    reviews: 100,
    rating: "★★★★★☆ ",
    ratingNumbers: "5.2",
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    id: 'product2'
  },
  {
    name: 'Mouse',
    price: 129.99,
    originalPrice: 159.55,
    discount: 8,
    quantityAvailable: 10,
    quantity: 1,
    quantityAvailable2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    image: "src/assets/mouse.jpg ",
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    dimensions: ['20cm', '18cm', '8cm'],
    rating: 4,
    reviews: 90,
    rating: "★★★☆ ",
    ratingNumbers: " 3.2",
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    id: 'product3'
  },
  {
    name: 'HP Laptop',
    price: 200,
    originalPrice: 230.99,
    discount: 30,
    quantityAvailable: 4,
    quantity: 1,
    quantityAvailable2: [1, 2, 3, 4],
    image: "src/assets/latptop1.webp ",
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    dimensions: ['20cm', '18cm', '8cm'],
    rating: 4.5,
    reviews: 120,
    rating: "★★★★☆ ",
    ratingNumbers: " 4.2",
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    id: 'product4'
  },
  {
    name: 'Laptop Casing',
    price: 129.99,
    originalPrice: 179.99,
    discount: 27,
    quantityAvailable: 5,
    quantity: 1,
    quantityAvailable2: [1, 2, 3, 4, 5],
    image: './laptop-casing.jpg',
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    dimensions: ['20cm', '18cm', '8cm'],
    rating: 4,
    reviews: 128,
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    rating: "★★★★☆ ",
    ratingNumbers: "4.2",
    id: 'product5'
  },

  {
    name: 'Asus Laptop',
    price: 150.99,
    originalPrice: 180.2,
    discount: 12,
    quantityAvailable: 7,
    quantity: 1,
    quantityAvailable2: [1, 2, 3, 4, 5, 6, 7],
    image: "src/assets/laptop2.jpg ",
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    dimensions: ['20cm', '18cm', '8cm'],
    rating: 9,
    reviews: 100,
    rating: "★★★★★☆ ",
    ratingNumbers: "5.2",
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    id: 'product6'
  },
  {
    name: 'Mouse',
    price: 129.99,
    originalPrice: 159.55,
    discount: 8,
    quantityAvailable: 6,
    quantity: 1,
    quantityAvailable2: [1, 2, 3, 4, 5, 6],
    image: "src/assets/mouse.jpg ",
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    dimensions: ['20cm', '18cm', '8cm'],
    rating: 4,
    reviews: 90,
    rating: "★★★☆ ",
    ratingNumbers: " 3.2",
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    id: 'product7'
  },
  {
    name: 'HP Laptop',
    price: 200,
    originalPrice: 230.99,
    discount: 30,
    quantityAvailable: 3,
    quantity: 1,
    quantityAvailable2: [1, 2, 3],
    image: "src/assets/latptop1.webp ",
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#95E1D3'],
    dimensions: ['20cm', '18cm', '8cm'],
    rating: 4.5,
    reviews: 120,
    rating: "★★★★☆ ",
    ratingNumbers: " 4.2",
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    id: 'product8'
  }

  ]);


  const [cartItems, setCartItems] = useState([

  ]);



  const stars = [1, 2, 3, 4, 5];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProduct, setIsProduct] = useState(1);
  const [cart, setCart] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setCart(cartItems.length)
  })




  function quantityChange(id, e) {
    const newQuantity = Number(e.target.value);

    setProducts(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    console.log(newQuantity);
  }

  function openModal(value) {
    setIsModalOpen(true);
    setIsProduct(value)
  }

  function closeModal() {
    setIsModalOpen(false);

  }

  function addCart() {


  }



  return (
    <>

      <BrowserRouter>
        <Header cart={cart} setCart={setCart} />
        {isModalOpen && products.map((pro, index) => (index === isProduct ? <ProductModal key={pro.id} stars={stars} closeModal={closeModal} pro={pro} quantity={quantity} cartItems={cartItems} setCartItems={setCartItems} /> : null))}

        <Routes>

          <Route path="/" element={<Home openModal={openModal} products={products} quantity={quantity} setQuantity={setQuantity} quantityChange={quantityChange} setCartItems={setCartItems} addCart={addCart} cartItems={cartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} quantity={quantity} />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
