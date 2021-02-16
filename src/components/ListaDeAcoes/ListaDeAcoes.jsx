import React, { Component } from "react";
import CardAcao from "../CardAcao/index";
import "./estilo.css";

class ListaDeAcoes extends Component {
  render() {
    return (
      <section>
        {this.props.acoes.map((acao, index) => {
          return (
            <CardAcao
              acao={acao.acao}
              quantidade={acao.quantidade}
              preco={acao.preco}
              cotacao={acao.cotacao}
              lucro={acao.lucro}
              porcentagem={acao.porcentagem}
            />
          );
        })}
      </section>
    );
  }
}

export default ListaDeAcoes;
