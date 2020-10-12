const initialState = {
  counter: 0,
}

export function counterReducer(state = initialState, action) {
  if (action.type === 'ADD') {
    const newState = { 
      ...state, 
      counter: state.counter + 1
    };
    // const newState = { ...state };
    // newState.counter = newState.counter + 1;
    return newState;
  }
  return state;
}