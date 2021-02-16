import React, { Component } from "react";
import "./estilo.css";

class CardAcao extends Component {
  render() {
    return (
      <tr className="linhaDados">
        <td className="dado">{this.props.acao}</td>
        <td className="dado">{this.props.quantidade}</td>
        <td className="dado">{this.props.preco}</td>
        <td className="dado">{this.props.cotacao}</td>
        <td className="dado">{this.props.lucro}</td>
        <td className="dado">{this.props.porcentagem}</td>
      </tr>
    );
  }
}

export default CardAcao;
