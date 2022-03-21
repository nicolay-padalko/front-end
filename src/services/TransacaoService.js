import axios from 'axios';

const TRANSACAO_API_BASE_URL = "http://localhost:8080/api/v1/transacoes";

class TransacaoService {

  getTransacoes() {
    return axios.get(TRANSACAO_API_BASE_URL);
  }

  createTransacao(transacao) {
    return axios.post(TRANSACAO_API_BASE_URL, transacao);
  }
}

export default  new TransacaoService()