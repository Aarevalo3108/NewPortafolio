import NavBar from "./NavBar"
import Footer from "./Footer"
import Home from "./home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
  <main className="grid">
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </main>
  )
}

export default App
