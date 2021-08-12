function FizzBuzz(numero) {
    let resultado = '';

    if (numero && numero % 3 === 0) {
        resultado += 'Fizz';
    }
    if (numero && numero % 5 === 0) {
        resultado += 'Buzz';
    }

    return resultado ? resultado : numero;
}

module.exports = FizzBuzz;