import { Conta } from "./conta.class";

export class ContaPoupanca extends Conta {
  constructor(saldo, senha) {
    super(saldo, senha);
  }

  atualizaJuros() {
    const juros = (this.saldo * 0.07).toFixed(2);
    this.saldo += parseFloat(juros);
    this.salvarMovimento("JUROS", juros, this.saldo);
  }
}
