// x-marks.js ** This works fine and I did it three different ways (sucessfully) so I don't understand
// why the built-in code-runner is not accepting it!

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
let x = 0;
let y = 0;

const finalposition = function (moves) {
// const finalposition = (moves) => {

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      y++;
    }
    else if (moves[i] === 'south') {
      y--;
    }
    else if (moves[i] === 'west') {
      x--;
    }
    else if (moves[i] === 'east') {
      x++;
    }
  }
  return [x,y];
}
console.log(finalposition(moves));
// returns [-1, 4]
// END