import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import TransacaoService from '../services/TransacaoService';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


class ListTransacaoComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transacoes: []
    }
    this.addTransacao = this.addTransacao.bind(this);
  }

  componentDidMount() {
    TransacaoService.getTransacoes().then((res) => {
      this.setState({transacoes: res.data});
    });
  }

  addTransacao() {
    this.props.history.push('/add-transacao');
  }

  render() {
    return (
        <div className="container">
          <div className="row">

            <div className="col-sm-4">
              <Form style={{padding: 10}}>
                <Form.Group>
                  <Form.Label> Data de início </Form.Label>
                  <Form.Control type="text"
                                placeholder="  /  /  "/>
                </Form.Group>
              </Form>
            </div>
            <div className="col-sm-4">
              <Form style={{padding: 10}}>
                <Form.Group>
                  <Form.Label> Data de Fim </Form.Label>
                  <Form.Control
                      type="email"
                      placeholder=" /  /  "
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-sm-4">
              <Form style={{padding: 10}}>
                <Form.Group>
                  <Form.Label> Nome operador transação </Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="  "
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-sm-12">
              <Button variant="primary" type="submit">
                Pesquisar
              </Button>
            </div>

          </div>
          <div>
            <h2 className="text-center">Lista Transações</h2>

            <div className="row">
              <table className="table table-striped table-bordered">
                <thead>
                <tr>
                  <th> Data</th>
                  <th> Valor</th>
                  <th> Tipo</th>
                  <th> Nome operador transação</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.transacoes.map(
                      transacao =>
                          <tr key={transacao.id}>
                            <td> {transacao.data}</td>
                            <td> {transacao.valor}</td>
                            <td> {transacao.tipo}</td>
                            <td> {transacao.operador}</td>
                          </tr>
                  )
                }
                </tbody>
              </table>
            </div>

          </div>
        </div>
    )
        ;
  }
}

export default ListTransacaoComponent;