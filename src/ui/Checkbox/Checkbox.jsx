import "./Checkbox.css";

const Checkbox = (props) => {
  const {
    children,
    checked,
    id,
    onChange
  } = props;
  return (
    <li className="main__item">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
    </li>
  );
};

export default Checkbox;
