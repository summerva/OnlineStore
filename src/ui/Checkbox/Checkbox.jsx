import "./Checkbox.css";

const Checkbox = (props) => {
    const {
        children,
        value,
        id
    } = props;
  return (
    <li className="main__item">
      <input 
        type="checkbox" 
        id={id}
        value={value} 
      />
      <label htmlFor={id}>{children}</label>
    </li>
  );
};

export default Checkbox;