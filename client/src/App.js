import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Layout from "./components/layout/Layout";
import MyAccount from "./pages/MyAccount";
import Home from "./pages/Home";
import Accesories from "./pages/Accesories";
import ApiContextProvider from "./context/apiContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ApiContextProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<LogIn />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/myaccount" element={<MyAccount />} />
              <Route exact path="/accesories" element={<Accesories />} />
            </Routes>
          </Layout>
        </ApiContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
