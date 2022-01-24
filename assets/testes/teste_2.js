const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) =>{
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    resultHandler(sum);
}

const showResult = result => {
    alert('The result after adding all numbers is: ' + result);
}

console.log(sumUp(showResult(1, 5, 10, -3, 6, 10)));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
