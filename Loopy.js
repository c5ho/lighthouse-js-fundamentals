for (let count = 100; count <= 200; count++) {
  if (count % 3 === 0 && count % 4 === 0) {
    console.log('LoopyLighthouse');
  }
  else if (count % 4 === 0) {
    console.log('Lighthouse');
  }
  else if (count % 3 === 0) {
    console.log('Loopy');
  }
  else {
    console.log(count);
  }
}