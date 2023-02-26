import { Profissao } from "../../../classes";
const nome = "Ariel Duarte";
const idade = 35;
const altura = 1.7;
const proffisao = "Software developer";
const apresentacao = new Profissao(nome, idade, altura, proffisao);
apresentacao.apresentar();
