import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import DeletarProduto from './components/produtos/deletarproduto/DeletarProduto';
import FormProduto from './components/produtos/formproduto/FormProduto';
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh] bg-gradient-to-r from-emerald-100 via-emerald-50 to-emerald-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/categorias/:tipo" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App