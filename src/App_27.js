import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage_27 from './pages/HomePage_27';
import AboutPage_27 from './pages/AboutPage_27';
import ProductsPage_27 from './pages/ProductsPage_27';
import ErrorPage_27 from './pages/ErrorPage_27';
import ShareLayout_27 from './pages/ShareLayout_27';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ShareLayout_27/>} >
      <Route index element={<HomePage_27 />} />
      <Route path='about' element={<AboutPage_27 />} />
      <Route path='products' element={<ProductsPage_27 />} />
      <Route path='*'  element={<ErrorPage_27 />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
