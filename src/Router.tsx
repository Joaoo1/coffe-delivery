import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Checkout } from './pages/Checkout';

import { Home } from './pages/Home';
import { Success } from './pages/Success';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
