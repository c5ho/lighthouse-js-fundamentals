function judgeVegetable(veggies, metric) {
  let maxMetric = veggies[0][metric];
  let maxSubmitter = veggies[0].submitter;
  
  for (let count = 0; count < veggies.length; count++) {
    if (veggies[count][metric] > maxMetric) {
      maxMetric = veggies[count][metric];
      maxSubmitter = veggies[count].submitter;
    }
  }
  return maxSubmitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));

//"Old Man Franklin"