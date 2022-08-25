import Ship from './ship';

test('Test ship name', () => {
  let newShip = Ship('Destroyer', 5);
  expect(newShip.name).toBe('Destroyer');
});

test('Test ship sunk', () => {
  let newShip = Ship('Destroyer', 5);
  expect(newShip.sunk).toBe(false);
});
