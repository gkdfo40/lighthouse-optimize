import SpinnerMp4 from "../assets/Spinner.mp4";
import SpinnerWebm from "../assets/Spinner.webm";

const LoadingCover = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video autoPlay loop muted playsInline>
        <source src={SpinnerMp4} type="video/mp4" />
        <source src={SpinnerWebm} type="video/webm" />
      </video>
    </div>
  );
};

export default LoadingCover;
