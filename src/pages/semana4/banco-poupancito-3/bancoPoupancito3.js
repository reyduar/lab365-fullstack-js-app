import { ContaPoupancaPremium } from "../../../classes";
const senhaValida = "12345";
const contaPoupancaPremium = new ContaPoupancaPremium(12000, senhaValida);
contaPoupancaPremium.atualizaJuros();
contaPoupancaPremium.imprimirExtrato("Conta Poupança Premium");
