const initialValue = {
  tickets: []
}

function ticketReducer(state, action) {
  switch (action.type) {
    case 'check_ticket':
      return { id: action.payload.id }
    case 'add_name':
      return { ...state, name: action.payload.tickets }
    case 'clear':
      return { ...initialValue }
    default:
      throw new Error()
  }
}

export { ticketReducer, initialValue }
