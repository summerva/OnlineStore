import "./Checkbox.css";

const Checkbox = (props) => {
    const {
        children,
        value,
      id,
        onChange,
    } = props;
  return (
    <li className="main__item">
      <input 
        type="checkbox" 
        id={id}
        value={value} 
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
    </li>
  );
};

export default Checkbox;