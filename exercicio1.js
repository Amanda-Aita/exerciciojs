import promptSync from 'prompt-Sync';
let prompt = promptSync();


import { moduloExercicio1 } from "./moduloExercicio1.js";
import { moduloExercicio2 } from "./moduloExercicio2.js";
import { moduloExercicio3 } from "./moduloExercicio3.js";
import { moduloExercicio4 } from "./moduloExercicio4.js";
import { moduloExercicio5 } from "./moduloExercicio5.js";
import { moduloExercicio6 } from "./moduloExercicio6.js";


let resposta;



do {

    console.log("Bem vindo ao menu de exercicios, escolha")

    resposta = prompt("Digite um numero de 1 a 6, para escolher um exercicio ou sair para interromper um programa ") 

    switch (resposta) {
        case "1":
             
            //chamar exercicio 1
            console.log("voce escolheu exercicio 1")
            moduloExercicio1 ()
            break;
            
        case "2":
            
            //chamar exercicio 1
            console.log("voce escolheu exercicio 2")
            moduloExercicio2 ()
            break;

        case "3":
            
            //chamar exercicio 1
            console.log("voce escolheu exercicio 3")
            moduloExercicio3 ()
            break;

        case "4":

            //chamar exercicio 1
            console.log("voce escolheu exercicio 4")
            moduloExercicio4 ()
            break;

        case "5":
            //chamar exercicio 1
            console.log("voce escolheu exercicio 5")
            moduloExercicio5 ()
            break;

        case "6":
            //chamar exercicio 1
            console.log("voce escolheu exercicio 6")
            moduloExercicio6 ()
            break;

                
        default:
            console.log("voce escolheu exerci")
            break;
    }

}  while (resposta != "sair");
    
