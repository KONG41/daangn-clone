import './App.css';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/product-detail" element={<MainLayout><ProductDetail /></MainLayout>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
