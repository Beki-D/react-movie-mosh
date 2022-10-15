import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Navbar from './components/navbar';
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
// import NewMovie from './components/newMovie';
import "./App.css";

// export function withRouter(Children){
//   return (props) =>{
//     const match = {params: useParams()};
//     return <Children {...props} match={match} />
//   }
// }

class App extends Component {
  render() {
    return (
     <>
      <Navbar />
      <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props}/>}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
      </main>
     </>
    );
  }
}

export default App;