const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const choisenMenu = {
      food: { pepperoni: 39.90, frango: 43.5 },
      drink: { coca: 7.50, agua: 4 },
    };
    const menuRetornado = createMenu(choisenMenu);
    // TESTE 1
    assert.strictEqual(typeof ((createMenu(choisenMenu).fetchMenu)), 'function');
    // TESTE 2
    assert.deepStrictEqual(Object.keys((createMenu(choisenMenu)).fetchMenu()), ['food', 'drink']);
    // TESTE 3
    assert.deepStrictEqual(createMenu(choisenMenu).fetchMenu(), choisenMenu);
    // TESTE 4
    assert.deepStrictEqual(createMenu().consumption, []);
    // TESTE 5
    menuRetornado.order('coca');
    assert.deepStrictEqual(menuRetornado.consumption, ['coca']);
    // TESTE 6
    menuRetornado.order('agua');
    menuRetornado.order('pepperoni');
    menuRetornado.order('frango');
    assert.deepStrictEqual(menuRetornado.consumption, ['coca', 'agua', 'pepperoni', 'frango']);
    // TESTE 7
    menuRetornado.consumption = [];
    menuRetornado.order('coca');
    menuRetornado.order('agua');
    menuRetornado.order('coca');
    assert.deepStrictEqual(menuRetornado.consumption, ['coca', 'agua', 'coca']);
    // TESTE 8
    menuRetornado.pay();
    assert.strictEqual(menuRetornado.pay(), 20.90);
  });
});
