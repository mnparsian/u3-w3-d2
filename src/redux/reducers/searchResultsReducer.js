const initialState = {
  jobs: []
};
const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_SEARCHEDJOBS":
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case "FETCH_JOBS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_JOBS_SUCCESS":
      return {
        ...state,
        jobs: action.payload,
        loading: false
      };
    case "FETCH_JOBS_FAILURE":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
export default searchResultsReducer;
