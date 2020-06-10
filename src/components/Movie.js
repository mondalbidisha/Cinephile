import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({movie}) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  const imdbURL = `https://www.imdb.com/title/${movie.imdbID}` 
  return (
    <div className="movie cursor-pointer">
      <a href={imdbURL} target="_blank">  {/* opens the movie title in imdb's website */}
        <Card>
          <Image 
          src={poster} 
          wrapped
          size='large' 
          ui={true} 
          />
          <Card.Content>
            <Card.Header className="ellipsis">{movie.Title}</Card.Header>
            <Card.Description className="ellipsis">
            {`The movie titled: ${movie.Title} released in ${movie.Year}`}
            </Card.Description>
          </Card.Content>
        </Card>
      </a>
    </div>
  ); 
};

export default Movie;