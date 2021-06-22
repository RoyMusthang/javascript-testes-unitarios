const createMenu = (menu) => {
  const menuRestaurante = { fetchMenu: () => menu,
    consumption: [],
    order: (string) => menuRestaurante.consumption.push(string),
  };

  menuRestaurante.pay = () => {
    let price = 0;
    menuRestaurante.consumption.forEach((element) => {
      if (element in menu.food) {
        price += menu.food[element];
      } else if (element in menu.drink) {
        price += menu.drink[element];
      }
    });
    return parseFloat(((price) * 1.10).toPrecision(4));
  };

  menuRestaurante.fetchMenu();
  menuRestaurante.pay();
  return menuRestaurante;
};

module.exports = createMenu;