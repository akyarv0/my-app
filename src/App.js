import "./App.css";
import React from "react";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import AppRouter from "./config/AppRouter";
import Loading from "./components/Loading";
import BasketDrawer from "./components/BasketDrawer";
import { ToastContainer } from "react-toastify";
import { useState } from "react";


import "react-toastify/dist/ReactToastify.css";

const App = () => {
  
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div>
      <PageContainer>
        <Header  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <AppRouter searchTerm={searchTerm} />
        <Loading />
        <BasketDrawer />
        <ToastContainer />
      </PageContainer>
    </div>
  );
};

export default App;
