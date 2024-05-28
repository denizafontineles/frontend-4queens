import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import ProductCatalog from './pages/product-catalog/ProductCatalog'
import Admin from './pages/admin/Admin'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productcatalog" element={<ProductCatalog />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
