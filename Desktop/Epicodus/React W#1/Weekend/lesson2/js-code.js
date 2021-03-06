const hydrate = (plant) => { //function literal
  return {
    ...plant,
    water: (plant.water || 0) + 1 //return new object representing plant's state
  }
};

const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
};

//making function more abstract
const changeState = (state, prop, value) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + value
  }
};

// curry the function above

const changeStateC = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}