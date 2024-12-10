export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const fetchJobs = (companyName) => async (dispatch) => {
  dispatch({ type: "FETCH_JOBS_REQUEST" });
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}`); // استفاده از نام کمپانی در URL
    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }
    const data = await response.json();
    console.log(data);
    dispatch({ type: "FETCH_JOBS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_JOBS_FAILURE", error: error.message });
  }
};
