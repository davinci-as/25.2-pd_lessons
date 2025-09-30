const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>
        {props?.text || "No estás pasando un texto"}
      </button>
    </>
  );
};

export default Button;
