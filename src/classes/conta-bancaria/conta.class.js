export class Conta {
  #saldo;
  #senha;
  #operacoes;

  constructor(saldo, senha) {
    this.#senha = senha;
    this.#saldo = parseFloat(saldo);
    this.#operacoes = [];
    this.salvarMovimento("SALDO INICIAL", 0, saldo);
  }

  get senha() {
    return this.#senha;
  }
  get saldo() {
    return this.#saldo;
  }
  set senha(senha) {
    this.#senha = senha;
  }
  set saldo(saldo) {
    this.#saldo = parseFloat(saldo);
  }

  salvarMovimento(operacao, valor, saldo) {
    this.#operacoes.push({ operacao, valor, saldo });
  }

  get operacoes() {
    return this.#operacoes;
  }

  retirda(senha, valor) {
    if (senha === this.senha) {
      if (valor <= this.saldo) {
        this.saldo -= parseFloat(valor);
        this.salvarMovimento("RETIRDA", valor, this.saldo);
      } else {
        console.error("Saldo insuficiente");
      }
    } else {
      console.error("Senha inválido");
    }
  }

  deposito(valor) {
    if (valor > 0) {
      this.saldo += parseFloat(valor);
      this.salvarMovimento("DEPOSITO", valor, this.saldo);
    } else {
      console.error("Valor inválido");
    }
  }

  imprimirExtrato() {
    let results = `\n Banco Poupancito  \n`;
    results += `================================= \n`;
    this.operacoes.forEach((item) => {
      results += `* ${item.operacao} | R$ ${item.valor} | R$ ${item.saldo}\n`;
    });
    results += `========================= \n`;
    console.log(results);
  }
}
