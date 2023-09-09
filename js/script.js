// Olá, mundo!

// AULA 01

// alert("Olá mundo!")

// variáveis = var , let , const

// SEPARADOR

/*
let letra="JavaScript";

let numero1=10, numero2=25

+ soma | - subtração | * multiplicação | / divisão

console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log(numero1/numero2);
*/

// SEPARADOR

/* Operadores Lógicos e Relacionais

let letra="JavaScript"

let numero01=10, numero02=25;

letra= numero01+numero02

console.log(numero01>numero02);
console.log(numero01<=numero02);
console.log(numero01==numero02);
console.log(numero01!=numero02);
*/

// SEPARADOR

// Igual e Idêntico | == verifica o valor | === verifica se são iguais ao TIPO | Número e String

/*
letra = "10";
let numero01=10, numero02=25;

console.log(numero01==letra)
console.log(numero01===letra)
*/

// SEPARADOR

// Estruturas de Decisão
/*
letra = "10";
let numero01=10, numero02=25;

if(numero01===letra)
    console.log("Os dois são do memso tipo");
else if(numero01==letra)
    console.log("Os dois tem o mesmo valor");
else
    console.log("Os dois não são iguais e nem do mesmo tipo");
*/

// SEPARADOR

// SWITCH
/*
let escolaridade1 = 1
switch(escolaridade1){
    case 1 : console.log("Ensino Fundamental"); break;
    case 2 : console.log("Ensino Médio"); break;
    case 3 : console.log("Ensino Superior"); break;
    case 4 : console.log("Mestrado"); break;
    case 5 : console.log("Doutorado"); break;
    default: console.log ("Escolaridade Não definida"); break;
}

let escolaridade2 = 2
switch(escolaridade2){
    case 1 : console.log("Ensino Fundamental"); break;
    case 2 : console.log("Ensino Médio"); break;
    case 3 : console.log("Ensino Superior"); break;
    case 4 : console.log("Mestrado"); break;
    case 5 : console.log("Doutorado"); break;
    default: console.log ("Escolaridade Não definida"); break;
}
*/

// AULA 02

// ESTRUTURAS DE DECISÃO - Atividade repetitiva de maneira automática

let flag = true;
let contador = 0;

while(flag){

    if(contador<10){
        console.log("trabalhando...")
        contador++;
    }
    else{
        flag = false;
        }
    }

// ++ Significa "contador + 1"
// -- Significa contador - 1
// Multiplicando: *=3 (multiplica por 3)
// contador += (de dois em dois, e por ai vai)

// pré-incremento e pós-incremento
// ++contador OU contador++