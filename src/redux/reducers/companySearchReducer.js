const initialState = {
  jobs: []
};
const companySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_SEARCHEDJOBSCOMPANY":
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case "FETCH_JOBS_REQUESTCOMPANY":
      return {
        ...state,
        loading: true
      };
    case "FETCH_JOBS_SUCCESSCOMPANY":
      return {
        ...state,
        jobs: action.payload,
        loading: false
      };
    case "FETCH_JOBS_FAILURECOMPANY":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
export default companySearchReducer;
