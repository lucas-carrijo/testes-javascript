//project euler - ex 2

let sum = 0;
let term1 = 1;
let term2 = 1;

while (term2 < 4000000) {
    term2 = term1 + term2;
    term1 = term2 - term1;
    if(term2 % 2 === 0){
        sum += term2
    }
    // sum += term2 % 2 === 0 ? term2 : 0;
}
console.log(sum);