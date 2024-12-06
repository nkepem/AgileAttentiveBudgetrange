import Link from "next/link";

const Title = ({ text }) => {
    return (
      <h1 className="text-2xl text-center font-bold text-secondary">
        {text}
      </h1>
    );
  };
  const Subtitle = ({ text }) => {
    return (
      <p className="text-md text-center">
        {text.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < text.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  };
const HeroSectionAlt = ({titleText, subtitleText}) => {

    return (
        <div
        className="hero" // Set height to one-third of the viewport height
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover", // Ensure the background image covers the entire area
          backgroundPosition: "center", // Center the background image
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <Title text={titleText} />
            <Subtitle text={subtitleText} />
         
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSectionAlt;
    