const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

const storeState = (initialState) => {
  let currentState = initialState; // We could pass in an initial state to the object instead of starting with an empty object as well.
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState };
    return newState;
  }
}

const stateControl = storeState(); // creating closure over the current state
const fedPlant = stateControl(blueFood);