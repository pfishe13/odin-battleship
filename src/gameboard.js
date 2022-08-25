import Ship from './ship';

const Gameboard = () => {
  let board = [];

  const initializeBoard = () => {
    for (let i = 0; i < 100; i += 1) {
      board.push(undefined);
    }
  };

  const placeShip = (ship, position, direction) => {
    const length = ship.length;

    if (direction === 'vertical') {
      for (let i = 0; i < length; i += 1) {
        board[position] = ship;
        position += 10;
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        board[position] = ship;
        position += 1;
      }
    }
  };

  const receiveAttack = (position) => {
    if (board[i] !== undefined && board[i] !== 'X') {
      board[i].hit();
      board[position] = 'HIT';
    } else if (board[i] === undefined) {
      board[position] = 'X';
    }
  };

  const getBoardElement = (i) => {
    return board[i];
  };

  return { initializeBoard, placeShip, getBoardElement };
};

export default Gameboard;
