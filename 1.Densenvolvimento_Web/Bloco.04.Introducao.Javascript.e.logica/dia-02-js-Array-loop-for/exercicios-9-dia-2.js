let meuArray25 = [];

for (let index = 1; index <= 25; index += 1) {
    meuArray25.push([index]);
}

//console.log(meuArray25);

let divisao = [];

for(let index1 = 0; index1 < meuArray25.length; index1 += 1) {
    divisao.push(meuArray25[index1] / 2)
}

console.log(divisao);