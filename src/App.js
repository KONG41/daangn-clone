import './App.css';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Job from './pages/Job';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './languages/i18n';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/product-detail" element={<MainLayout><ProductDetail /></MainLayout>} />
          <Route path="/job" element={<MainLayout><Job /></MainLayout>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
