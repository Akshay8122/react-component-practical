import React from "react";
import "./App.scss";
import "./styles/main.scss";
import { ConfigProvider } from "antd";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: "#4D5B7C",
          colorPrimary: "#0069FF",
        },
        components: {
          Divider: {
            colorTextHeading: "#718096",
            fontSize: "16px",
          },
          Input: {
            colorTextPlaceholder: "#A0AEC0",
          },
        },
      }}
    >
      <div className="App">
        <SignIn />
      </div>
    </ConfigProvider>
  );
}

export default App;
