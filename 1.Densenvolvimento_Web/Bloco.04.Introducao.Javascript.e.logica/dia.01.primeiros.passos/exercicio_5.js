const angulo1 = 100;
const angulo2 = 60;
const angulo3 = 20;

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    console.error("O ângulo é inválido!");
} else if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else { 
    console.log(false);
}