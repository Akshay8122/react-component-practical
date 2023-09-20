import React from "react";
import "./App.scss";
import "./styles/main.scss";
import { ConfigProvider } from "antd";
import theme from "./theme/Theme";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <SignIn />
      </div>
    </ConfigProvider>
  );
}

export default App;
