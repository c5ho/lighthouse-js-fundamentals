const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const chosenStations = [];

  for (const station of stations) {
    const cap = station[1];
    if (cap >= 20) {
    //  console.log(cap);
      const type = station[2];
      if (type === 'school' || type === 'community centre') {
      //console.log(station[0]);
      chosenStations.push(station[0]);  //how can I push the capacity and type to the new array as well?
      }
    }
  }
  //console.log(chosenStations);
  return chosenStations;
}

//console.log(stations);
console.log((chooseStations(stations)));
