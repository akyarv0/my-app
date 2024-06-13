
import './App.css';
import React from 'react'

import PageContainer from './container/PageContainer';

import Header from './components/Header';

import AppRouter from './config/AppRouter';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';


const App = () => {

  const {products} = useSelector((store) => store.basket);
  return (
    <div><PageContainer>


      
      <Header />
      <AppRouter />
      <Loading />
      <Drawer anchor='right' sx = {{ padding: "20px"}} > 
{
   products && products.map((product) => {
    return (
      <div>
<table>
  <thead>
    <tr>Product</tr>
    <tr>Title</tr>
    <tr>Quantity</tr>
    <tr>Price</tr>
    <tr>Total</tr>

  </thead>
  <tbody>
    <tr>
      <td><img src={product.image} alt={product.title} /></td>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{product.price * product.quantity}</td>
    </tr>
  </tbody>

</table>

      </div>

    )

  })
}




      </Drawer>
     
 
      </PageContainer></div>
  )
}

export default App