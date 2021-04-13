const hydrate = (plant) => { //function literal
  return {
    ...plant,
    water: (plant.water || 0) + 1 //return new object representing plant's state
  }
};