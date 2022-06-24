//Variaveis
const myName = "Arthur Sydney";
const birthCity = "Uberlândia";
let birthYear = 2000;

//Tipos primitivos
const base = 5;
let height = 8;
let area = base * height;
let perimeter = 2 * base + 2 * height;


//Variaveis
console.log(myName);
console.log(birthCity);
console.log(birthYear);

//Tipos primitivos
console.log(base);
console.log(height);
console.log(area);
console.log(perimeter);

//if e else
let notaAluno = 75;

if (notaAluno >= 80) {
    console.log("Parabéns,você foi aprovado");
} else if (notaAluno < 80 && notaAluno >= 60) {
    console.log("Você está na lista de espera!");
} else {
    console.log("Você foi reprovado");
}