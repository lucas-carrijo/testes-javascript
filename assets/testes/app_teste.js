// const a = 2;
// const b = 7;
// const sumResultArrow = () => a + b;
// console.log(sumResultArrow());



/*
loop infinito
const multiplyArrow = (c, d) => c === d ? console.log(multiplyArrow(2, 2)) : console.log(multiplyArrow(1, 1))
multiplyArrow(2, 7);
*/

// const multiplyArrow = (c, d) => {c === d ? console.log("aqui") : console.log("ali")}
// multiplyArrow(2, 2);

//os tres pontos no parametro da função chamamos de rest operator, ele pega todos os argumentos passados para a função
//e os transforma em um array, quando usamos o paramentro rest podemos ter outros parametros apenas antes dele: const algumaCoisa = (a, b, c, ...d) => {}
/*
outra maneira de escrever essa função sem utilizar o rest operator é utilizando a palavra function com a palavra reservada arguments
const subtractUp = function() {
    let sum = 0;
    for (const num of arguments) {
        sum += num;
    }
    return sum;
}
console.log(subtractUp(1, 5, 10, -3, 6, 10));
*/ 
const sumUp = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    console.log(numbers);
    console.log(typeof(numbers));
    return sum;
}
console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));



