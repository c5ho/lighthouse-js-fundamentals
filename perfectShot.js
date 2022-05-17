const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
/*let x = 0;
let y = 0;

function finalPosition (moves) {
  for (const step of moves) {
    if (step === 'north') {
      y += 1;
    }
    else if (step === 'south') {
      y -= 1;
    }
    else if (step === 'east') {
      x += 1;
    }
    else {
      x -= 1;
    }
  }
  console.log(`[${x}, ${y}]`)
}
*/



function finalPosition (moves) {
  let pos = [0,0];
  for (const step of moves) {
    if (step === 'north') {
      pos[1] += 1;
    }
    else if (step === 'south') {
      pos[1] -= 1;
    }
    else if (step === 'east') {
      pos[0] += 1;
    }
    else {
      pos[0] -= 1;
    }
  }
  return pos;
}


console.log(finalPosition(moves));