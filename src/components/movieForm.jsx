import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  return (
    <div>
      <h1>Movie Form : {id}</h1>
      <button className="btn btn-info" onClick={() => navigate("../movies", {replace: true})}>Save</button>
    </div>
  );
}

export default MovieForm;
