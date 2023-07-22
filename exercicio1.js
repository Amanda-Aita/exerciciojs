import promptSync from "prompt-Sync";



import { exercicio1 } from "./moduloExercicio1.js";


let resposta;

let prompt = promptSync();

do {

    console.log("Bem vindo ao menu de exercicios, escolha")

    resposta = prompt("Digite um numero de 1 a 6, para escolher um exercicio ou sair para interromper um programa ") 

    switch (resposta) {
        case "1":
             exercicio1 ()
            //chamar exercicio 1
            console.log("voce escolheu exercio 1")

            break;
            case "2":
                //chamar exercicio 1
                console.log("voce escolheu exercio 2")
    
        default:
            console.log("voce escolheu exercio")
            break;
    }

}  while (resposta != "sair");
    
