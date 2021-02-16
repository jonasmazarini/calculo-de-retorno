import React, { Component } from "react";
import "./estilo.css";

class Cabecalho extends Component {
  render() {
    return (
      <table className="tabela">
        <thead>
          <tr className="linhaTitulos">
            <td className="titulo">Empresa</td>
            <td className="titulo">Quantidade</td>
            <td className="titulo">Preço</td>
            <td className="titulo">Cotação</td>
            <td className="titulo">Lucro</td>
            <td className="titulo">% Lucro</td>
          </tr>
        </thead>
      </table>
    );
  }
}

export default Cabecalho;
