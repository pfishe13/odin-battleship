import Gameboard from './gameboard';

test('Test gameboard initializer', () => {
  let gameboard = Gameboard();
  gameboard.initializeBoard();
  for (let i = 0; i < 100; i += 1) {
    expect(gameboard.getBoardElement(i)).toEqual(undefined);
  }
});

test('Test gameboard placeShip', () => {
  let gameboard = Gameboard();
  gameboard.initializeBoard();
  const ship = { length: 4 };
  gameboard.placeShip(ship, 4, 'vertical');
  expect(gameboard.getBoardElement(4)).toEqual(ship);
  expect(gameboard.getBoardElement(5)).toEqual(undefined);
  expect(gameboard.getBoardElement(14)).toEqual(ship);
});

test('Test gameboard placeShip', () => {
  let gameboard = Gameboard();
  gameboard.initializeBoard();
  const ship = { length: 4 };
  gameboard.placeShip(ship, 4, 'vertical');
  expect(gameboard.getBoardElement(5)).toEqual(undefined);
});

test('Test gameboard placeShip', () => {
  let gameboard = Gameboard();
  gameboard.initializeBoard();
  const ship = { length: 4 };
  gameboard.placeShip(ship, 4, 'vertical');
  expect(gameboard.getBoardElement(14)).toEqual(ship);
});
