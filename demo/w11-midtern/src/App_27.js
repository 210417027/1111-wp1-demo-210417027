import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_27 from './pages/HomePage_27';
import ErrorPage_27 from './pages/ErrorPage_27';
import SharedLayout_27 from './pages/SharedLayout_27';

import P1Page_27 from './pages/P1Page_27';
import P2Page_27 from './pages/P2Page_27';
import P3Page_27 from './pages/P3Page_27';
import P4Page_27 from './pages/P4Page_27';
import P5Page_27 from './pages/P5Page_27';
import P6Page_27 from './pages/P6Page_27';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_27 />}>
          <Route index element={<HomePage_27 />} />
          <Route path='P1_27' element={<P1Page_27 />} />
          <Route path='P2_27' element={<P2Page_27 />} />
          <Route path='P3_27' element={<P3Page_27 />} />
          <Route path='P4_27' element={<P4Page_27 />} />
          <Route path='P5_27' element={<P5Page_27 />} />
          <Route path='P6_27' element={<P6Page_27 />} />
          <Route path='*' element={<ErrorPage_27 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
