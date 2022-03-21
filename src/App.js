import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListTransacaoComponent from "./components/ListTransacaoComponent";

import React from "react";

function App() {
  return (
      <div className="App">
        <HeaderComponent />
        <ListTransacaoComponent/>
        <FooterComponent />
      </div>
  );
}

export default App;
