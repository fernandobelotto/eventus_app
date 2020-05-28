const initialValue = {
  id: null
}

function userReducer (state, action) {
  switch (action.type) {
    case 'add_id':
      return { ...state, id: action.payload.id }
    case 'clear':
      return { ...initialValue }
    default:
      throw new Error()
  }
}

export { userReducer, initialValue }
