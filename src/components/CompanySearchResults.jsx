import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { BiStar } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions/index";

const CompanySearchResults = () => {
  const { companyName } = useParams();
  const jobs = useSelector((state) => state.searchResults.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (companyName) {
      dispatch(fetchJobs(companyName));
    }
  }, [dispatch, companyName]);

  return (
    <Container>
      {jobs.map((jobData) => (
        <Row key={jobData._id} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
          <Col xs={3} className="d-flex align-items-center">
            <BsStarFill
              color="gold"
              size={16}
              className="mr-2 my-auto"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_FAVOURITE",
                  payload: jobData.company_name
                })
              }
            />

            <BiStar
              color="gold"
              size={16}
              className="mr-2 my-auto"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_FAVOURITE",
                  payload: jobData.company_name
                })
              }
            />

            <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
          </Col>
          <Col xs={9}>
            <a href={jobData.url} target="_blank" rel="noreferrer">
              {jobData.title}
            </a>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default CompanySearchResults;
