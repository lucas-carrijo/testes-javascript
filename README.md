# testes-javascript
learning and improving js skills

/*
funções podem ser armazenadas em objetos, chamamos essa funções de métodos:
ex:
const person = {
    greet: function greet() {
        console.log('Hello there!');
    }
};
*/

/*
podemos armazenar uma função em uma constante
chamamos de function expression, nesse tipo de função
não é possível chama-la antes de defini-la
const start = function startGame() {
    console.log('');
};
*/

/*função anonima não possui uma assinatura (um "nome")
const start = function() {
    console.log('Game is starting...');
}; 

startGameBtn.addEventListener('click', start);
*/

/*
podemos usar a função anomino como paramentro ex:
se colocarmos o parenteses logo depois da chave a função é executada imediatamente
*/ 

/*
examplo de função anonima e arrow function
const add = function(a, b){
    return a + b
}

const add = (a, b) => a + b;
*/