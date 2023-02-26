import { Conta } from "../../../classes";
const senhaValida = "12345";
const senhaInvalida = "789456";
const contaCorrente = new Conta(12000, senhaValida);

contaCorrente.deposito(1000);
contaCorrente.retirda(senhaValida, 10000);
contaCorrente.retirda(senhaInvalida, 100);
contaCorrente.imprimirExtrato("Conta Corriente");
contaCorrente.retirda(senhaValida, 11000);
