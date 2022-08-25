const Ship = (name, length) => {
  const position = [];
  let hit = 0;
  let sunk = false;

  const isHit = (positionAttacked) => {
    position.array.forEach((element) => {
      if (positionAttacked === element);
    });
  };

  const isSunk = () => {
    if (length === hit) {
      sunk = true;
    }
  };
};

export default Ship;
