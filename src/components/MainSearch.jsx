import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  //const [jobs, setJobs] = useState([]);
  const jobs = useSelector((state) => state.searchResults.jobs);
  const loading = useSelector((state) => state.searchResults.loading);
  const dispatch = useDispatch();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "FETCH_JOBS_SUCCESS", payload: data });
        //setJobs(data);
        dispatch({
          type: "ADD_TO_SEARCHEDJOBS",
          payload: data
        });
      } else {
        alert("Error fetching results");
        dispatch({ type: "FETCH_JOBS_FAILURE" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Link to="/favorite">Favorite Companies</Link>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
