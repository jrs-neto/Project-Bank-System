// Essa é uma classe que representa uma conta bancária
// Ela possui os atributos agencia, nome, sobrenome, saldo e ehPremium
// Note que os atributos nome e sobrenome precisam ser passados como argumentos para o construtor
// Objetivo: criar uma classe Conta que possui os métodos depositar, sacar, verSaldo, comprarPremium e solicitarEmprestimo


class Conta {
    constructor(nome, sobrenome){
        this.agencia = '0001';
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.saldo = 50;
        this.ehPremium = false;
    }

    logar(){
        console.log('******************************');
        console.log(`Olá ${this.nome} ${this.sobrenome}!`);
        console.log('Seja bem vindo ao Banco JS');
        console.log('O que deseja fazer hoje?');
        console.log('******************************');
    }

    // Crie um método chamado depositar que recebe um valor e adiciona ao saldo atual
    depositar(valor){
        this.saldo += valor; 
    }

    // Crie um método chamado sacar que recebe um valor e subtrai do saldo atual se tiver saldo
    // Se não tiver saldo, exiba uma mensagem dizendo que não tem saldo suficiente
    sacar(valor) {
        if(this.saldo < valor) {
            console.log('Seu saldo é insuficiente.')
        } else {
            this.saldo -= valor;
            console.log(`Você sacou R$${valor}`)
        }
    }


    // Crie um método chamado verSaldo que exiba o saldo atual e se a conta é premium ou não
    verSaldo() {
        console.log(`Seu saldo atual é: R$${this.saldo}.`)
        if(this.ehPremium) {
            console.log('Parabéns, você possui uma conta premium.')
        } else {
            console.log('Desculpe, você não é um usuário premium.')
        }
    }


    // Crie um método chamado comprarPremium que tira o valor de 10 reais do saldo atual e torna a conta premium
    // Se não tiver saldo, exiba uma mensagem dizendo que não tem saldo suficiente para ser premium
    comprarPremium() {
        if(this.ehPremium) {
            console.log('Você já é um usuário premium.')
        } else if  (this.saldo >= 10) {
            this.saldo -= 10;
            this.ehPremium = true;
            console.log('Parabéns, você acaba de adquirir uma conta premium.')
            console.log(`Seu saldo atual é: R$${this.saldo}.`)
        } else {
            console.log('Desculpe, você não possui saldo suficiente.')
        }
    }


    // Crie um método chamado solicitarEmprestimo que recebe um valor e adiciona ao saldo atual se a conta for premium e se o valor for menor que 500
    solicitarEmprestimo(valor) {
        if(this.ehPremium && valor <= 500) {
            this.saldo += valor;
            console.log(`Parabéns, você acaba de adquirir um empréstimo. Seu saldo atual é: R$${this.saldo}.`)
        } else {
            console.log('Você não possui uma conta premium ou solicitou um valor superior a R$500,00.')
        }
    }
}


const contaJose = new Conta('José', 'Rodrigues');

    contaJose.sacar(10);
    contaJose.sacar(10);
    contaJose.sacar(100);
    contaJose.verSaldo();








// TODO: criar uma pagina HTML para criar uma conta e fazer as operações bancárias
