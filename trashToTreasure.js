function smartGarbage (trashType, bins) {
  if (trashType === ' waste') {
    bins.waste++;
  }
  else if (trashType === 'recycling') {
    bins.recycling++;
  }
  else {
    bins.compost++;
  }
  return bins;

}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

/*
{
  waste: 4,
  recycling: 3,
  compost: 5
}
*/