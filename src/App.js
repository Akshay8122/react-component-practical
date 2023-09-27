import React from "react";
import "./App.scss";
import "./styles/main.scss";
import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme/Theme";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPass from "./pages/ForgotPass";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
