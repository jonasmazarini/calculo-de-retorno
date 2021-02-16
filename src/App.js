import React, { Component } from "react";
import Cabecalho from "./components/Cabeçalho/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeAcoes from "./components/ListaDeAcoes/index";
class App extends Component {
  constructor() {
    super();
    this.state = {
      acoes:[]
    };
  }
  criarCard(acao, quantidade, preco, cotacao, lucro, porcentagem) {
    const novoCard = { acao, quantidade, preco, cotacao, lucro, porcentagem };
    const novoArrayAcoes = [...this.state.acoes,novoCard]
    const novoEstado = {
      acoes:novoArrayAcoes
    }
    this.setState(novoEstado)
  }
  render() {
    return (
      <section className="pagina">
        <FormularioCadastro criarCard={this.criarCard.bind(this)} />
        <Cabecalho />
        <ListaDeAcoes acoes={this.state.acoes} />
      </section>
    );
  }
}

export default App;
