import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../services/model";
import * as S from "./styles/HomeMoviesContainer.styled";

import noImagewebP from "../assets/noImage.webp";

const MoviesContainer = ({ movies }: { movies: Movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { poster_path, title, vote_average, release_date, id } = movies;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/movie-detail/${id}`);
  };

  const changeLoadingStatus = () => {
    setIsLoading(false);
  };

  return (
    <S.MoviesWrapper>
      <S.MovieWrapper>
        <S.WrapperImg onClick={goToDetail}>
          {isLoading ? (
            <S.MovieImg
              src={noImagewebP}
              onLoad={() => {
                changeLoadingStatus();
              }}
            />
          ) : (
            <S.MovieImg
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}?format=webp`}
              alt="movie-poster"
            />
          )}
        </S.WrapperImg>
        <S.WrapperTitle onClick={goToDetail}>{title}</S.WrapperTitle>
        <S.ReleaseDate>
          <div>{release_date}</div>
        </S.ReleaseDate>
        <S.MoviesContainer>평균 ★{vote_average}</S.MoviesContainer>
      </S.MovieWrapper>
    </S.MoviesWrapper>
  );
};

export default MoviesContainer;
