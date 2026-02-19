import './Input.css'

const Input = (props) => {
    const {
        type = '',
        name = '',
        id='',
        placeholder = '',
        // className='',
    } = props
  return (
    // <div className={`search ${className}`} >
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
  );
};

export default Input
