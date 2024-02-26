//                     exercicio 1 (aula 3)
/*
var nome = "Vagner"
var sobrenome = "Vogel"
var idade = 42
var estudante = true
    console.log("Olá, me chamo " , nome , sobrenome , " e tenho " , idade , " anos de idade ");
*/
//                     exercicio 2 (aula 3)
/*
var nome = prompt("Digite o seu nome");
var idade = prompt("Qual a sua idade?");
    console.log (typeof nome)
    console.log(typeof idade)
*/
//                    OPERADORES ARITMÉTICOS

/*                            SOMA

const primeiroValor = 10
const segundoValor = 20
const resultado = primeiroValor + segundoValor + 4
    console.log(resultado) //34

//                          SUBTRAÇÃO

const valor1 = 10
const valor2 = 20
const valor3 = valor2 - valor1
    console.log(valor3) // 10
*/
/*
//                         MULTIPLICAÇÃO

const valorA = 10
const valorB = 25
const valorC = valorB * valorA
    console.log(valorC)  // 250
*/
/*
//                             DIVISÃO

const valorX = 345
const valorY = 10
const valorZ = valorX / valorY
    console.log(valorZ) // 34.5
*/
/*
//                         RESTO DA DIVISÃO

const restoDaDivisao = 11 % 4
    console.log(restoDaDivisao) // 3
*/
/*
//                        exercicio 1 (aula 4)

// A)
var a = 3
var b = 4
var c = a + b
    console.log(c) // 7
*/
/*
// B)
var valorA = 3
var valorB = 5
var valorC = valorA * valorB
    console.log(valorC / 2) // 7.5
*/
/*
// C)
var valor1 = 5
var valor2 = 4
var valor3 = valor1 - valor2
    console.log(valor3 * -1) // -1
*/
/*
// D)
var restoDivisao = 234 % 5
    console.log(restoDivisao) // 4
*/
/*
//                       exercicio 2 (aula 4)

// A)
var a = 2
var b = 3
    console.log(a === b) // false
*/
/*
// B)
var valorA = 4
var valorB = 3
    console.log(valorA !== valorB) // true
*/
/*
// C)
var num1 = 5
var num2 = 2
    console.log(num1 > num2) // true
*/
/*
// D)
var numA = 2
var numB = 9
    console.log(numA < numB) // true
*/
//                       exercicio 3 (aula 4)
/*
var a = true
var b = false
var c = true
    console.log(a && b); // false
    console.log(b && c); // false
    console.log(a && c); // true
    console.log(a && b && c); // false
*/
/*
//                       exercicio 4 (aula 4)

var a = true
var b = false
var c = true
    console.log(a || b); // true
    console.log(b || c); // true
    console.log(a || c); // true
    console.log(a || b || c) // true
*/
/*
//                        exercicio 5 (aula 4)

var nome = prompt("Digite o seu nome");
    console.log(nome);
var anoNascimento = prompt("Digite o ano em que nasceu");
    console.log(anoNascimento);
var anoAtual = 2024;
var anoFinal = 2050;
var anoTotal = anoAtual - anoNascimento;
    console.log(`${nome}, você tem ${anoTotal} anos de idade.`)
//console.log(anoTotal);
    console.log("É de maior? " , anoTotal >= 18);
var anoTotal = anoFinal - anoNascimento;
    console.log(`${nome}, você terá ${anoTotal} anos de idade em ${anoFinal}.`);
*/
//                        exercicio 1 (aula 5)

/*      >> exemplo com concatenação <<

const nome = prompt("Digite o seu nome:")
const cor = prompt("Qual a sua cor preferida?")
    console.log("A cor favorita do " + nome + " é " + cor)
*/
/*      >> exemplo com template strings <<

const nome = prompt("Digite o seu nome:")
const cor = prompt("Qual a sua cor favorita?")
    console.log(`A cor favorita do ${nome} é ${cor}`)
*/
//                        exercicio 2 (aula 5)
/*
const frase = prompt("Digite uma frase:");
const fraseMaiuscula = frase.toUpperCase();
const linguaI = frase.replaceAll("o", "i");
    console.log(fraseMaiuscula);
    console.log(linguaI);
    console.log(frase.length);
*/
//                        exercicio 3 (aula 5)
/*
const racaCachorro = ["SRD", "Labrador", "Collie", "Pitbull", "Dobermann"];
//const num = prompt("Digite um número de 0 a 4:");
//console.log(racaCachorro[num]);
    console.log(racaCachorro[prompt("Digite um numero de 0 a 4:")]);
*/
//                        exercicio 4 (aula 5)
/*
const numeros = [1, 2, 3, 4, 5, 6];
    console.log(numeros.length);
numeros.push(7);
    console.log(numeros);
numeros.splice(3, 2);
    console.log(numeros);
    console.log(numeros.length);
*/

//                        exercicio 1 (aula 6)
/*
function imprima(){
    console.log("Olá mundo!");
}
imprima();
*/
//                        exercicio 2 (aula 6)
/*
function nomeA(nome){
   console.log(`Olá ${nome}`);
}
nomeA('Raul');
nomeA('José');
nomeA('Adão');
*/
//                        exercicio 3 (aula 6)
/* 
function nums(num1, num2){
    return num1 + num2   
}
var numsTotal= nums(2, 3) // 5
    console.log(numsTotal)

/*                             
function areaCalculada(comprimento, peso){
    return comprimento + peso
}
var tamanhoTotal = areaCalculada(4, 6)
    console.log(tamanhoTotal) // 10
*/
/*
//                        exercicio 4 (aula 6)

function numeros(array){
    return [(array[array.lenght])/2, (array[0])/2];  // <<<<<<<<< revisar
}
    console.log(numeros([1,2,3,4,5,6,7,8,12])) // [4.5, 0.5]
*/
/*

//                    >> EXPRESSÕES DE FUNÇÃO <<

//                       exercicio 5 (aula 6)

//               ** SINTAXE DE EXPRESSÃO DE FUNÇÃO **

const names = function(name1, name2, name3){
    return "Olá "  + name1 + "\n, Olá " + name2 +"\n, Olá " + name3;
}
    console.log(names('vagner', 'jose', 'maria'));
*/
/*
//               ** SINTAXE DE ARROW FUNCTION **

let somaNumbers = (num1, num2) => {
    return num1 + num2
}
    console.log(somaNumbers(2, 3));
*/
//                            AULA 7

//                         >> OBJETOS <<
/*
const professor = {
    nome: 'Vitor',
    idade: 27,
    tarefas: ['Dar aula', "Responder dúvidas"],
    contarPiada: function() {
        console,log('É pa vê ou pa comê?')
    }
}
console.log(professor.idade)    <<<< NOTAÇÃO DE PONTO
//         ou
console.log(professor[ "tarefas" ])     <<<< NOTAÇÃO DE COLCHETES


//                      ALTERANDO VALORES

console.log(professor.nome);
console.log(professor["idade"]);
    professor.nome = "Vagner";
    console.log(professor.nome);
    */

//                      exercicio 1 (aula 7)
/*
const meuFilme = {
    nome: 'Filme do Vogel',
    diretor: 'Vagner',
    anoLancamento: 1981,
    elenco: ['Nestor', 'Neli', 'Vanessa', 'Elber', 'Tjeimi'],
    jaAssistiu: true   
}
console.log(meuFilme.nome);
console.log(meuFilme.diretor);
console.log(meuFilme.anoLancamento);
console.log(meuFilme[ "elenco" ]);
console.log(meuFilme[ "jaAssistiu" ]);
*/

//                       exercicio 2 (aula 7)
/*
const pessoa = {
    nome: 'Vagner',
    idade: 42,
    estiloMusical: 'rock',
}
console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.estiloMusical}`)
*/
//           EXEMPLO DE ACESSANDO OBJETOS DENTRO DE OBJETOS {{ }}  
/*
const donoDoPet = {
    nome: "Vitor Hugo",
    pet: {
    nomeDoPet: "Wanda",
    raca: "Vira-lata",
    idade: 1
}
}
console.log(donoDoPet.pet.nomeDoPet) // Wanda
*/
//          EXEMPLO DE ACESSANDO ARRAYS DENTRO DE OBJETOS {[ ]}
/*
const curso = {
    nome: "Noturno frontend",
    linguagens: ["JS", "CSS", "HTML"]
}
console.log(curso.linguagens[0])
*/
//                EXEMPLO DE ARRAY DE OBJETOS
/*
const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
]
console.log(professores[1].nome)
*/
//                 ADICIONANDO PROPRIEDADES
/*
const curso = {
    nome: "Frontend",
    linguagens: ["JS", "CSS", "HTML"]
    }
//           NOTAÇÃO DE PONTO
//                  OU    
//           NOTAÇÃO DE COLCHETES

// console.log(curso.numeroEstudantes = 50)
// console.log(curso['numeroEstudantes'] = 50)
*/
//                    exercicio 3 (aula 7)
/*
const meuFilme = {
    nome: 'Filme do Vogel',
    diretor: 'Vagner',
    anoLancamento: 1981,
    elenco: ['Nestor', 'Neli', 'Vanessa', 'Elber', 'Tjeimi'],
    jaAssistiu: true   
}
meuFilme.personagens= ["personagem1", "personagme2", "personagem3", "personagem4", "personagem5"];

console.log(meuFilme.elenco[0] + " - " + meuFilme.personagens[0]);
console.log(meuFilme.elenco[1] + " - " + meuFilme.personagens[1]);
console.log(meuFilme.elenco[2] + " - " + meuFilme.personagens[2]);
console.log(meuFilme.elenco[3] + " - " + meuFilme.personagens[3]);
console.log(meuFilme.elenco[4] + " - " + meuFilme.personagens[4]);

meuFilme.elenco[0] = "XUXA";
console.log(meuFilme.elenco[0]);
console.log(meuFilme);
*/
//                     ESPALHAMENTO OU SPREAD
/*
const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'São Paulo'
}
const novoUsuario = {
...usuario,
nome: 'João',
idade: 28
}
*/
//                       COPIANDO ARRAYS
/*
const listaDeNomes = ["Mika", "Paula", "Vitor"]
const copiaListaDeNomes = [...listaDeNomes]
    console.log(copiaListaDeNomes)
*/
//                       exercicio 4 (aula 7)
/*
const pessoa = {
    nome: 'Vagner',
    idade: 42,
    comidasPreferidas: ["Pizza", " Churrasco", " e Lasanha"],
    melhorAmigo: {
        nome: 'Fúria',
        idade: 8,
    }
}
console.log(`O nome de pessoa é ${pessoa.nome} e suas comidas preferidas são ${pessoa.comidasPreferidas}. Seu melhor amigo se chama ${pessoa.melhorAmigo.nome} e tem ${pessoa.melhorAmigo.idade} anos.`)
*/









