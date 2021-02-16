import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.Acao = "";
    this.Quantidade = "";
    this.Preco = "";
    this.cotacao = 30;
    this.lucro = 0;
    this.porcentagem = 0;
  }
  handleMudancaAcao(evento) {
    evento.stopPropagation();
    this.acao = evento.target.value;
  }

  handleMudancaQuantidade(evento) {
    evento.stopPropagation();
    this.quantidade = evento.target.value;
  }

  handleMudancaPreco(evento) {
    evento.stopPropagation();
    this.preco = evento.target.value;
  }

  handleMudancaLucro(evento){
    evento.stopPropagation();
    this.lucro = ((this.quantidade*this.cotacao)-(this.quantidade*this.preco));
  }

  handleMudancaPorcentagem(evento){
    evento.stopPropagation();
    this.porcentagem = (this.lucro/(this.quantidade*this.preco))
  }

  criarCard(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarCard(this.acao, this.quantidade, this.preco, this.cotacao, this.lucro, this.porcentagem);
  }

  render() {
    return (
      <form className="cadastro" onSubmit={this.criarCard.bind(this)}>
        <section className="formulario">
          <p className="item">Ação</p>
          <input
            className="campoAcao"
            type="text"
            placeholder="Ticker"
            onChange={this.handleMudancaAcao.bind(this)}
          />
          <p className="item">Quantidade</p>
          <input
            className="campoQuantidade"
            type="number"
            placeholder="Qntd"
            onChange={this.handleMudancaQuantidade.bind(this)}
          />
          <p className="item">Preço</p>
          <input
            className="campoPreco"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="R$"
            onChange={this.handleMudancaPreco.bind(this)}
          />
          <div>
            <button className="botao">Salvar</button>
            <button className="botao" type="reset">Cancelar</button>
          </div>
        </section>
      </form>
    );
  }
}

export default FormularioCadastro;