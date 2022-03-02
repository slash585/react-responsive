import "./App.css"
import Navbar from "./components/Navbar/navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home/home"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
