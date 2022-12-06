import * as S from "./styles/Poster.styled";
import { useState } from "react";

import SpinnerMp4 from "../assets/Spinner.mp4";
import SpinnerWebm from "../assets/Spinner.webm";

const Poster = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <S.Img
        src={src}
        onLoad={onLoad}
        alt="poster"
        style={{ display: isLoaded ? "inherit" : "none" }}
      />

      {!isLoaded && (
        <S.SpinnerWrapper>
          <S.Spinner autoPlay loop muted playsInline>
            <source src={SpinnerWebm} type="video/webm" />
            <source src={SpinnerMp4} type="video/mp4" />
          </S.Spinner>
        </S.SpinnerWrapper>
      )}
    </>
  );
};

export default Poster;
