const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type === 'input_focus') {
    newState.focused = true
  }
  if(action.type === 'input_blur') {
    newState.focused = false
  }
  return newState;
}