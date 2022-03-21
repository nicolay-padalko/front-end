import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListTransacaoComponent from "./components/ListTransacaoComponent";

function App() {
  return (
      <div className="App">
        <HeaderComponent/>
        <div className="container">
          <ListTransacaoComponent/>
        </div>
        <FooterComponent/>
      </div>
  );
}

export default App;
