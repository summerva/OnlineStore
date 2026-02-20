import "./Button.css";

const Button = (props) => {
  const {
    children,
    className = "",
    onClick
  } = props;
  return (
    <>
      <button
        className={`button ${className}`}
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
