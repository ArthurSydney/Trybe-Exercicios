let array = ['java', 'javascript', 'python', 'html', 'css'];


let maior = 0;
let contar = 0;

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > contar) {
         maior = index;
         contar = array[index].length;
    } else {
        contar = contar
    }
}

console.log(array[maior]);

let contar1 = array[0].length;
   let menor = 0;
 for (let index1 = 0; index1 < array.length; index1 += 1) {
   if (array[index1].length < contar1) {
     menor = index1;
     contar1 = array[index1].length;
   } else {
     contar1 = contar1;
   }
 }
 console.log(array[menor]);