"use strict";
/*
console.log("Olá!")
console.log("Otávio Esteves")

let x = 2

x = 10

let age : number = 30
console.log("A idade é "+age)

let nome : string = "Davi"
console.log(typeof nome)
*/
/*

let x : string = "davi"
let y : string = "daniel"

if (x === y) {
    console.log("Estritamente iguais")
} else {
    console.log("Estritamente diferentes")
    console.log(typeof x)
    console.log(typeof y)
}

*/
/*

let aluno : [string, number]

aluno = ["davi", 40]

*/
var tamanho;
(function (tamanho) {
    tamanho["p"] = "pequeno";
    tamanho["m"] = "m\u00E9dio";
    tamanho["g"] = "grande";
})(tamanho || (tamanho = {}));
const camisa = {
    name: "esportiva",
    size: tamanho.g
};
console.log(camisa.size);
