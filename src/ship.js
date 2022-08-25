const Ship = (name, length) => {
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hit += 1;
  };

  const isSunk = () => {
    if (length === hit) {
      sunk = true;
    }
  };

  return {
    hit,
    get length() {
      return length;
    },
    get name() {
      return name;
    },
    get sunk() {
      return sunk;
    },
  };
};

export default Ship;

// [
//     {
//         x: 0,
//         y: 0,
//         hit: false
//     },
//     {
//         x: 1,
//         y: 0,
//         hit: false
//     },
//     {
//         x: 2,
//         y: 0,
//         hit: false
//     }
// ]
