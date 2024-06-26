import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
import NotFound from '../pages/NotFound'

const AppRouter = ( {searchTerm}) => {
  return (
    <div>
        <Routes>

          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="*" element={< NotFound/>} />

        </Routes>


    </div>
  )
}

export default AppRouter