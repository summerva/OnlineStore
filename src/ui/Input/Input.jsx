import "./Input.css";

const Input = (props) => {
  const {
    type = "",
    name = "",
    id = "",
    required,
    placeholder = "",
    value,
    onChange,
    onKeyDown,
  } = props;
  return (
    <input
      type={type}
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
