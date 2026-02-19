import "./Button.css";

const Button = (props) => {
  const { children, className = "" } = props;
  return (
    <>
      <button className={`button ${className}`} type="submit">
        {children}
      </button>
    </>
  );
};

export default Button;
