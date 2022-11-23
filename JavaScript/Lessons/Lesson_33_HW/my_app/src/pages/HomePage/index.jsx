import React from "react";
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Page_1 from '../Page_1'
import Page_2 from '../Page_2'

export default function HomePage() {
  return (
    <div>

      <Link to='/page_1'>Page_1</Link>
      <Link to='/page_2'>Page_2</Link>

      <Routes>
          <Route path="page_1" element={<Page_1 />} />
          <Route path="page_2" element={<Page_2 />} />
      </Routes>
    
    </div>
  );
}
