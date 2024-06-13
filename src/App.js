import "./App.css";
import React from "react";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import AppRouter from "./config/AppRouter";
import Loading from "./components/Loading";
import BasketDrawer from "./components/BasketDrawer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <PageContainer>
        <Header />
        <AppRouter />
        <Loading />
        <BasketDrawer />
        <ToastContainer />
      </PageContainer>
    </div>
  );
};

export default App;
