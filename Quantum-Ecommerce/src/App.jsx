//import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Cart from "./pages/Cart";
import Orders from "./pages/Orders"
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path ="/"  element = {<Home />}/>
      <Route path ="/cart"  element = {<Cart />}/>
      <Route path ="/orders"  element = {<Orders />}/>
    </Routes>
    </>
  )
}

export default App
