import React, {Component} from 'react';
import TransacaoService from "../services/TransacaoService";


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

  addTransacao(){
    this.props.history.push('/add-transacao');
  }

  render() {
    return (
        <div>
          <h2 className="text-center">Lista Transação</h2>
          <div className="row">
            <button className="btn btn-primary" onClick={this.addTransacao}> Adicionar Transação</button>
          </div>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
              <tr>
                <th> Data</th>
                <th> Valor</th>
                <th> Tipo</th>
                <th> Nome operador transação </th>
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
    );
  }
}

export default ListTransacaoComponent;