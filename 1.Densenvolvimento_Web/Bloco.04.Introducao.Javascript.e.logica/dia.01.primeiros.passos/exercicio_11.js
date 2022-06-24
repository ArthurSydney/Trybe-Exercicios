//11
//INSS

let salarioBruto = 1000;

if (salarioBruto <= 1556.94) {
    console.log(salarioBruto + (salarioBruto * 0.08));
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    console.log(salarioBruto * 0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    console.log(salarioBruto * 0.11);
} else {
    console.log(salarioBruto + 570.88);
}