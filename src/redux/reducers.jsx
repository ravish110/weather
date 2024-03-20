// reducer.js
const initialState = {
  searchTerm: 'Mumbai'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
