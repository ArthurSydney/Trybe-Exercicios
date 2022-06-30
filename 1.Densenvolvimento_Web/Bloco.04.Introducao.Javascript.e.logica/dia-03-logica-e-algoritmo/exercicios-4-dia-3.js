let maiorPrimo = 0;

for (let index = 1023; index >= 2; index -= 1) {
    let = quantity = 0;
    for (let j = 0; j <= index; j += 1) {
        if (index % j === 0) {
            quantity += 1
        }
    }
    
    if (quantity === 2) {
        maiorPrimo = index;
        break;
    }

}
console.log(maiorPrimo);