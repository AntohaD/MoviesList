export default function(state, action) {
  switch (action.type) {
    case "getMovies":
      return {
        ...state,
        arrayMovies: action.payload,
      };
    case "sort":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "nextPage":
      const addPage = state.page + 1;
      return {
        ...state,
        page: addPage,
      };
    case "prevPage":
      let removePage = state.page;
      if (state.page > 1) {
        removePage = state.page - 1;
      }
      return {
        ...state,
        page: removePage,
      };
    default:
      return state;
  }
}