/* [M1S06] Ex 1 - Promisse 
Construa uma função que irá verificar se um valor passado pelo parâmetro é par. 
Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”.

Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. Não esqueça de enviar a mensagem como parâmetro */

const prompt = require("prompt-sync") ();

let valorSolicitado = prompt (`Digite um número: `);
let numero = parseInt(valorSolicitado); 
    
function numeroPar() {
    return new Promise ((resolve,reject) => {
   
    if(numero % 2 === 0) {
        resolve ('Número validado é Par');
    } else {
        reject ('Error: número informado é impar');
    }
    }
    )};
    
    numeroPar()
        .then ((resultadoPar) => {console.log(resultadoPar)})
        .catch ((resultadoImpar) => {console.log(resultadoImpar)});




