import { ContaPoupanca } from "./contaPoupanca.class";

export class ContaPoupancaPremium extends ContaPoupanca {
  constructor(saldo, senha) {
    super(saldo, senha);
  }

  atualizaJuros() {
    const juros = (this.saldo * 0.12).toFixed(2);
    this.saldo += parseFloat(juros);
    this.salvarMovimento("JUROS", juros, this.saldo);
  }
}
