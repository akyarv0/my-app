
import './App.css';
import React from 'react'

import PageContainer from './container/PageContainer';

import Header from './components/Header';

import AppRouter from './config/AppRouter';
import Loading from './components/Loading';


const App = () => {
  return (
    <div><PageContainer>


      
      <Header />
      <AppRouter />
      <Loading />
     
 
      </PageContainer></div>
  )
}

export default App