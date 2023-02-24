import { ContaPoupanca } from "../../../classes";
const senhaValida = "12345";
const contaPoupanca = new ContaPoupanca(12000, senhaValida);
contaPoupanca.atualizaJuros();
contaPoupanca.imprimirExtrato();
