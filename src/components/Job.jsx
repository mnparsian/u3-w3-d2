import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsStarFill } from "react-icons/bs";
import { BiStar } from "react-icons/bi";

const Job = ({ data }) => {
  //const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favorites.favourite.list);
  const dispatch = useDispatch();
  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        {isFav ? (
          <BsStarFill
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name
              })
            }
          />
        ) : (
          <BiStar
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data.company_name
              })
            }
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
