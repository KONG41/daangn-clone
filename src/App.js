import './App.css';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import JobDetail from './pages/JobDetail';
import RealEstate from './pages/RealEstate';
import EstateDetail from './pages/EstateDetail'
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
          <Route path="/job-detail" element={<MainLayout><JobDetail /></MainLayout>} />
          <Route path="/real-estate" element={<MainLayout><RealEstate /></MainLayout>} />
          <Route path="/real-estate-detail" element={<MainLayout><EstateDetail /></MainLayout>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
