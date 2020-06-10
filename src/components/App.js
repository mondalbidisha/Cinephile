import React, { useReducer, useEffect } from "react";
import { Loader, Segment, Card } from 'semantic-ui-react'
import { initialState, reducer } from "../store/reducer";
import axios from "axios";

import Header from "./Header";
import Movie from "./Movie";
import Search from "./SearchBox";

import './../App.scss';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=saw&apikey=4a3b711b";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <div className="spinner">
        <Loader 
         active 
         size='massive'>
          Loading ...
        </Loader>
      </div>
    ) : errorMessage ? (
      <Segment>
        <div className="errorMessage">
          {errorMessage}
        </div>
      </Segment>
    ) : (
        movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
        )
      )
    );

  return (
    <div className="App">
      <div className="m-container">
        <Header title="Cinephile" refreshPage={refreshPage}/>

        <Search search={search} />
        <Segment className="border-none box-shadow-none">
          <p className="App-intro">Sharing a few of our favourite movies</p>
        </Segment>
        <Card.Group>
          <div className="movies">{retrievedMovies}</div>
        </Card.Group>
      </div>
    </div>
  );
};

export default App;
