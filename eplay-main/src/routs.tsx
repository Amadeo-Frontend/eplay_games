import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
