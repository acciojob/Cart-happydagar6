import React from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { AppProvider } from "./context";

const App = () => {
  return (
    <AppProvider>
      <div id="main" style={{ fontFamily: "sans-serif" }}>
        <Navbar />
        <CartContainer />
      </div>
    </AppProvider>
  );
};

export default App;