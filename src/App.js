import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Navbar from './components/navbar';
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
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
      <main className="container">
        <Navbar />
        <Routes>
          <Route path="/movies/:id" element={<MovieForm />} /> 
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="//*" element={ <Navigate to="/movies" />} />
          <Route path="*" element={ <Navigate to="/not-found" />} />
        </Routes>
      </main>
    );
  }
}

export default App;