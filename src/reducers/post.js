let initialState = {
  isFetching: false,
  items: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        items: action.payload
      }

    case 'CREATE_POST_SUCCESS':
      return {
        ...state,
        isFetching: false,
        items: [action.payload, ...state.items]
      }

    default:
      return state
  }
}

export default postReducer