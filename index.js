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
var numsTotal = nums(2, 3) // 5
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
    estiloMusical:"Rock",
}
console.log(`O nome da pessoa é ${pessoa.nome}, e ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.estiloMusical}`);

function exercicio4(objetoPessoa, arrayComidas, objetoMelhorAmigo){
    var novoObjeto = {...objetoPessoa, comidasPreferidas: arrayComidas, melhorAmigo: objetoMelhorAmigo};
    console.log(`O nome da pessoa é ${novoObjeto.nome} e suas comidas preferidas são ${novoObjeto.comidasPreferidas[0]}, ${novoObjeto.comidasPreferidas[1]}, ${novoObjeto.comidasPreferidas[2]}. Seu melhor amigo se chama ${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.melhorAmigo.idade} anos.`);
}
exercicio4(pessoa, ["arroz", "feijão", "carne"], {nome: "João", idade:10});
*/
//                           AULA 8
/*
let condicao1 = true;
if(condicao1){
    console.log('Entrei no if 1');
}
let condicao2 = false;
if(condicao2){
    console.log('Entrei no if 2');
}
*/
//                   exercicio 1 (aula 8)
/*
function numeros(num1, num2){
    if(num1 === num2){
        console.log("SUCESSO");
    }
}
numeros(prompt("Digite num1"), prompt("Digite num2"));
*/
//                   exercicio 1.1 (aula 8)
/*
function fulano(){
    var nome = prompt('Digite o seu nome:');
    var idade = prompt('Qual a sua idade?');
        if(idade > 18){
            console.log(`${nome}, você pode dirigir`);
        }else{
            console.log(`${nome}, você não pode dirigir`);
        }
}
fulano()
*/                     
/*
function podeDirigir(nome, idade){
    if(idade >= 18){
        return `${nome}, você pode dirigir`;
    }
}
console.log(podeDirigir(prompt("Digite o seu nome"),prompt("Qual a sua idade?")));
*/
/*
let condicao = false
if(condicao){
    console.log('Entrei no if');
}else{
    console.log('Entrei no else');
}
*/
//                      exercicio 2 (aula 8)
/*
function comparaNumeros(num1, num2){
    if(num1 === num2){
        return `Os números são iguais`;
    }else{
        return `Os números são diferentes`
    }
}
console.log(comparaNumeros(prompt("Digite um número"), prompt("Digite outro número")));
*/
//                              >>> EXEMPLO de if + else + if <<<
/*
let condicao1 = false
let condicao2 = true

if (condicao1){
    console.log('Entrei no if')
}else{
//  como o valor da condicional é false,
//  o codigo do else será executado
    if (condicao2){
    // como o valor da condicao2 é true,
    // executaremos esse código
    console.log('Entrei no if 2')    
    }
}
*/
//                      exercicio 3 (aula 8)
/*
function comparaNumeros(num1, num2){
    if(num1 < num2){
        return `O primeiro número é menor que o segundo`
    }
    if(num1 > num2){
        return `O primeiro número é maior que o segundo`
    }else{
        return `Os números são iguais`
    }
}
console.log(comparaNumeros(prompt("Digite um número"), prompt("Digite outro número")));
*/
//                       
/*
function numeros(){
    var num1 = prompt('Digite um número');
        console.log(num1)
    var num2 = prompt('Digite outro número');
        console.log(num2)

    if(num1 > num2){
        console.log('Pimeiro número é maior que o segundo número');
    }if(num1 < num2){
        console.log('Segundo número é maior que o primeiro número');
    }else if(num1 === num2){
        console.log('Os números são iguais');
    }
}
numeros()
*/
//                                     SWITCH CASE (aula 8)
/*
let paisDeOrigem
if (paisDeOrigem === 'Brasil'){
    console.log('brasileiro')
} else if (paisDeOrigem === 'EUA'){
    console.log('norte americano')
} else if (paisDeOrigem === 'Inglaterra'){
    console.log('inglês')
} else if (paisDeOrigem === 'França'){
    console.log('Francês')
} else if (paisDeOrigem === 'Itália'){
    console.log('italiano')
} else if (paisDeOrigem === 'Canadá'){
    console.log('canadence')
} else {
    console.log('nacionalidade não encontrada')
}
*/
/*
let paisDeOrigem
switch (paisDeOrigem){
    case 'Brasil':
        console.log('brasileiro')
        break
    case 'EUA':
        console.log('norte americano')
        break
    case 'Inglaterra':
        console.log('inglês')
        break
    default:
        console.log('nacionalidade não encontrada')
        break            
}
*/
//                      exercicio 4 (aula 8)
/*
let pokemon = prompt("Escolha um pokemon")
switch (pokemon){
    case 'Charmander':
        console.log('fogo');
        break;
    case 'Bulbasauro':
        console.log('planta e veneno');
        break;
    case 'Squirtle':
        console.log('água');
        break;
    default:
        console.log('Pokemon não encontrado');            
}
*/
//              >>>>    exemplo de operadores lógicos e condicionais    <<<<
/*
let condicao1 = true
let condicao2 = false

if (condicao1 && condicao2){
    // entra aqui se ambas forem true
}
if (!condicao1){
    // entra aqui se condicao1 for false
}
*/
//                       exercicio 5 (aula 8)
/*
function aluno(ensinoMedio, idade, outraFaculdade){
    if ((ensinoMedio === "sim") && (idade >= 18) && (outraFaculdade === "não")){
     return 'Você pode estudar nesta faculdade'
    } else {
        return 'Você não pode estudar nesta faculdade'
    }  
}
console.log(aluno(prompt("Já passou pelo ensino médio?"), Number(prompt("Qual a sua idade?")), prompt("Estuda em outra faculdade?")));
*/
//                       exercicio 5 (aula 8)
/*
function podeEntrarNaFaculdade(ensinoMedio, idade, faculdade){
    if(ensinoMedio === "sim" || ensinoMedio === "Sim")
    {ensinoMedio = true;}else{ensinoMedio = false;}

    if(faculdade === "sim" || faculdade === "Sim")
    {faculdade = true;}else{faculdade = false;}

    if(idade >= 18 && ensinoMedio && !faculdade){
        return "Você pode entrar na faculdade";
    }
    else{return "Você não pode entrar na faculdade";}
}
console.log(podeEntrarNaFaculdade(prompt("Você concluiu o ensino médio?"),Number(prompt("Qual a sua idade?")),prompt("Você já estuda em uma faculdade?")));
*/
//                       exercicio complementar (aula 8)
//   1. CALCULADORA
/*
function calculadora(num1, num2){
    
    return num1 * num2
}
var resultado = calculadora(3, 5)
console.log(resultado)
*/  
//   2. TIRANDO A MEDIA DE NOTAS
/*
function notas(){
    var cincoNotas = [];
        for(var i = 1; i <= 5; i++){
            var cincoNotas = prompt("Digite a sua nota" +i+":");
            notas.push(cincoNotas);
        }
        var soma = 0;
        for(var j = 0; j < cincoNotas.length; j++){
            soma += cincoNotas[j]
        }
        var media = soma/cincoNotas.length;
}
console.log(notas)
// var notasAluno = mediaNotas [3, 5, 6, 7, 8] / 5
//console.log(notas)
*/
//   3. PALINDROMOS
/*
function palindromo(){

}
/*

//                               EXEMPLO(AULA DIA 06/03)
/*
function calculaArea(base, altura){
    return base * altura;
}

function calculaAreaTotal(valores = []){
    var resultado = valores[0] + valores[1] + valores[2] + valores[3];
    return resultado;
}
function calculaValores(valores = []){
    valores[0] = Number(valores[0]);
    valores[1] = Number(valores[1]);

    var areaCalculada = calculaArea(valores[0], valores[1])
    var areaTotal = calculaAreaTotal([areaCalculada,areaCalculada,areaCalculada,areaCalculada]);

    return areaTotal;
}

function pegaValores(){
    return calculaValores([prompt("Digite a base"), prompt("Digite a altura")]);
}

console.log(pegaValores());
*/
//                                  AULA DIA 08/03
/*
 Trocar o oleo do carro
   * Verificar a quilometragem no odometro.
   * Se o odometro estiver marcando 5 mil kms a mais desde a ultima troca, realizar a troca por quilometragem.
   * Caso a quilometragem nao tenha ultrapassado a marca dos 5 mil, conferir em que mes foi efetuada a ultima troca de oleo.
   * Se a ultima troca foi feita a 6 meses ou mais, fazer a troca de oleo por tempo. 
   * Verificar a quantidade de oleo que é utilizada no motor.
   * Verificar qual o tipo de oleo que é utilizado no motor.
   * Comprar o oleo
   * Comprar o filtro de oleo
   * Separar as ferramentas para fazer a troca do oleo
   * Colocar um recipiente embaixo do motor para receber o oleo velho
   * Abrir a tampa do oleo na tampa de valvulas do motor
   * Abrir o bujao no carter para escoar o oleo
   * Remover o filtro velho do bloco do motor
   * Limpar a base que recebe o filtro no motor
   * Melejar com oleo a base do filtro novo antes de rosqueá-lo no motor
   * Rosquear o filtro novo ao motor
   * Se já tiver escoado todo o oleo velho fechar o bujao no carter
   * Retirar o recipiente com oleo velho de baixo do motor
   * Colocar a litragem de oleo correta no motor
   * Verificar o nivel de oleo na vareta
   
*/

//                            AULA 9 ( LAÇO WHILE( "enquanto" ))               
/*
//   EXEMPLO 1 - IMPRIMINDO NUMEROS
let i = 0
while (i < 10){
    console.log(i)
    i++
}
*/
/*
let estomago = 0;
while(estomago < 100){
    console.log("Quero comer mais coxinhas");
    estomago = estomago + 10;
}
*/
//                            exercicio 1 (aula 9)
/*
function numero(){
    let i = 0
    while(i <= 0){
        console.log (prompt("Digite um numero"))
       // i++
   }
    
}
numero()
*/
/*
function somarNumeros(){
    let soma = 0;
    let numero = 1;
    while (numero !== 0){
        numero = Number(prompt("Digite um numero ( ou 0 para sair):"));
        soma += numero;
    }
    console.log(`A soma dos numeros digitados é: ${soma}`);
}
somarNumeros();
*/
//                            LAÇO FOR(" para") (aula 9)
/*
for(let i = 0; i < 10; i++){
    console.log(i) // imprime de 0 a 10 na tela
}
*/
/*
const numeros = [14, 67, 89, 15, 23]
for(let i = 0; i < numeros.length; i++){
    const elemento = numeros[i]
    console.log(elemento)
}
*/
//           EXEMPLO DA APOSTILA
/*
const numeros = [11, 15, 18, 14, 12, 13]

function devolveMaiorNumero(array) {

let maiorNumero = 0

for(let i = 0; i < array.length; i++) {
let numeroAtual = array[i]

if(numeroAtual >= maiorNumero) {
maiorNumero = numeroAtual
}
}

console.log(`O maior número do array é ${maiorNumero}`)
}

devolveMaiorNumero(numeros)
*/
/*
function valorMaior(array){
    var numeroMaior = array[0];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element > numeroMaior){
            numeroMaior = element
        }
    }
    return numeroMaior;
}
var meuArray = [10, 20, 30, 50, 80, 1, 99, 4, 60]
console.log(valorMaior(meuArray));
*/
//                           TESTE REALIZADO PELO PROFESSOR

function somarNumerosComArray(){
    var numeros = [];
    var numero = 1;
    while(numero !== 0){
        numero = Number(prompt("Digite um número ou 0 para sair"));
        numeros.push(numero)
    }
    var soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma 
}
console.log(somarNumerosComArray());

