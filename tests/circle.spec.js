const assert = require('assert');
const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // Teste se circle retorna um objeto.
    assert.strictEqual(typeof (circle(8)), 'object');
    // Teste se o objeto retornado tem 3 entradas.
    assert.strictEqual(Object.keys(circle(6)).length, 3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.strictEqual(circle(), undefined);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    assert.strictEqual((circle(2)).circumference, 12.56);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    assert.strictEqual(parseFloat((circle(3).area).toPrecision(4)), 28.26);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    assert.deepStrictEqual(circle(3), { radius: 3, area: 3.14 * 3 * 3, circumference: 18.84 });
  });
});
