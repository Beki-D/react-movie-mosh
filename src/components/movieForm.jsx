import { useParams } from "react-router-dom";

const MovieForm = ({ history }) => {
  let { id } = useParams();
  // console.log(`/some/${id}`);

  return (
    <div>
      <h1>Movie Form : {id}</h1>
      <button className="btn btn-primary" onClick={() => history.push("/movies")}>Save</button>
    </div>
  );
}

export default MovieForm;
