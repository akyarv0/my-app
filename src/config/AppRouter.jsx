import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'

const AppRouter = () => {
  return (
    <div>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="*" element={<Home />} />

        </Routes>


    </div>
  )
}

export default AppRouter