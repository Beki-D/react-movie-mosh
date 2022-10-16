import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../data/fakeMovieService";
import { getGenres } from "../data/fakeGenreService";
// import { useParams, useNavigate } from "react-router-dom";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };  
  
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };
  
  componentDidMount() {
    console.log("componentDidMount");
    const genres = getGenres();
    this.setState({ genres });
    //Checking the link address for the id parameter in the route
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    //Try changing replace to push for a cool bug
    if(!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie)});
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }
  
  doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push("/movies");
  }

  render() {
    return(
      <div>
        <h1>Movie Form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "true")}
          {/* {console.log("getGenres: " + getGenres()[0]._id)} */}
          {this.renderSelect("genreId", "Genre", getGenres())}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Daily Renatal Rate", "number")}
          {this.renderButton("save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
