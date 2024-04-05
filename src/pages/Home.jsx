import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../components/CardList";

const Home = ({ movies = [] }) => {
  return (
    <div>
      <CardList movies={movies} />
    </div>
  );
};

export default Home;
