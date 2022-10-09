import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Movies from "./components/movies";
import Navbar from './components/navbar';
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Navbar />
        <Routes>
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