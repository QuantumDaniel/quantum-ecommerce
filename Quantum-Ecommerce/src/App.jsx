//import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Cart from "./pages/Cart";
import Orders from "./pages/Orders"
function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
