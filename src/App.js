import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListTransacaoComponent from "./components/ListTransacaoComponent";
import {
  Container,
  Content1,
  Content2,
  Content3,
  Content4,
  ContentBox,
  Footer,
  Main,
  NavBar,
  SideBar
} from "./components/styles/Container.styled";
import React from "react";

function App() {
  return (
      <div className="App">
        <Container>
          <NavBar>NavBar</NavBar>
          <Main>Saldo total:  Saldo no periodo </Main>
          {/*<SideBar>SideBar</SideBar>*/}
          <ContentBox>
            <Content1>Data</Content1>
            <Content2>Valor</Content2>
            <Content3>Tipo</Content3>
            <Content4>Nome Operador Transação</Content4>
          </ContentBox>

          <Footer> 1 2 3 </Footer>
        </Container>
      </div>
  );
}

export default App;
