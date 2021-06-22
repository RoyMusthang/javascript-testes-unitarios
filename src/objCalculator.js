/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (x, y) => (x + y),
  mult: (x, y) => (x * y),
  div: (x, y) => Math.trunc(x / y),
  sub: (x, y) => (x - y),
};
// https://www.w3schools.com/jsref/jsref_trunc.asp  Math.trunc Retorna a parte inteira de um número
module.exports = calculator;
