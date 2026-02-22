import "./Button.css";

const Button = (props) => {
  const {
    children,
    className = "",
    onClick,
    disabled,
  } = props;
  return (
    <>
      <button
        className={`button ${className}`}
        disabled={disabled}
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
