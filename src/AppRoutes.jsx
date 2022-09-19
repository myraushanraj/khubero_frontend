import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, PageNotFound, TokenPage, Blog } from './components';

const AppRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="app" element={<TokenPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='blog' element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
)

export default AppRoutes;