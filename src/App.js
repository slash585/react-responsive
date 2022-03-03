import "./App.css"
import Navbar from "./components/Navbar/navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home/home"
import Services from "./views/Services/services"
import Signup from "./views/Signup/signup"
import Product from "./views/Products/products"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
