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
  
  export default Subtitle;