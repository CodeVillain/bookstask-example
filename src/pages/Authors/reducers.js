export const types = {
  OPEN_AUTHOR_INFO: "OPEN_AUTHOR_INFO",
  SET_INITIAL_DATA: "SET_INITIAL_DATA"
};

const initialState = {
  chosenAuthorId: 'Author1'
};

export default function authors(state = initialState, action) {

  switch (action.type) {
    case types.SET_INITIAL_DATA:
      return {
        ...state,
        booksList: action.data.books,
        authorsList: action.data.authors
      };
    case types.OPEN_AUTHOR_INFO:
      return {
        ...state,
        chosenAuthorId: action.id
      };
    default:
      return state;
  }
};
