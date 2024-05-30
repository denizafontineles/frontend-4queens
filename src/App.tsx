import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Admin from './pages/admin/Admin'
import CorpoeBanho from './pages/product-catalog/corpo-e-banho/CorpoeBanho'
import ProductPage from './pages/product-page/ProductPage'
import Novidades from './pages/product-catalog/novidades/Novidades'
import Perfumaria from './pages/product-catalog/perfumaria/Perfumaria'
import Rosto from './pages/product-catalog/rosto/Rosto'
import Cabelos from './pages/product-catalog/cabelos/Cabelos'
import Maquiagem from './pages/product-catalog/maquiagem/Maquiagem'
import Luminosa from './pages/product-catalog/rosto/subcategories/luminosa/Luminosa'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c/novidades" element={<Novidades />} />
          <Route path="/c/corpo-e-banho" element={<CorpoeBanho />} />
          <Route path="/c/perfumaria" element={<Perfumaria />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/c/cabelos" element={<Cabelos />} />
          <Route path="/c/maquiagem" element={<Maquiagem />} />
          <Route path="/c/rosto" element={<Rosto />} />
          <Route path="/c/rosto/luminosa" element={<Luminosa />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
