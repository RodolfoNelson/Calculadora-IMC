
function calcularIMC() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; 

    let resultadoCalculo = (peso / ((altura / 100) ** 2)).toFixed(2);
    document.getElementById('resultado').innerHTML = `IMC: ${resultadoCalculo} - ${validarIndice(resultadoCalculo)}`;
}

function Strategy () {
    this.calculo = function (tipo, imc) {
        return tipo.calculo(imc);
    }
};

function BaixoPeso () {
    this.calculo = function (imc) {
        if (imc < 18.5) return this.titulo;
    },
    this.titulo = 'Baixo Peso'
};

function PesoNormal () {
    this.calculo = function (imc) {
        if (imc >= 18.5 && imc <= 25) return this.titulo;
    },
    this.titulo = 'Peso Normal'
};

function Sobrepeso () {
    this.calculo = function (imc) {
        if (imc >= 25.1 && imc <= 29.99) return this.titulo;
    },
    this.titulo = 'Sobrepeso'
};

function Obesidade () {
    this.calculo = function (imc) {
        if (imc >= 30 && imc <= 34.99) return this.titulo;
    },
    this.titulo = 'Obesidade'
};

function ObesidadeSevera () {
    this.calculo = function (imc) {
        if (imc >= 35 && imc <= 39.99) return this.titulo;
    },
    this.titulo = 'Obesidade Severa'
};

function ObesidadeMorbida () {
    this.calculo = function (imc) {
        if (imc >= 40) return this.titulo;
    },
    this.titulo = 'Obesidade Mórbida'
};

function validarIndice (imc) {
    let tipo = "";
    const strategy = new Strategy();
    tipo = strategy.calculo(new BaixoPeso(), imc) ?? tipo; 
    tipo = strategy.calculo(new PesoNormal(), imc) ?? tipo; 
    tipo = strategy.calculo(new Sobrepeso(), imc) ?? tipo; 
    tipo = strategy.calculo(new Obesidade(), imc) ?? tipo; 
    tipo = strategy.calculo(new ObesidadeSevera(), imc) ?? tipo; 
    tipo = strategy.calculo(new ObesidadeMorbida, imc) ?? tipo; 
    return tipo;
}