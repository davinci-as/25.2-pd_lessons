const Button = (props) => {
  return (
    <>
      <button>{props?.text || "No estás pasando un texto"}</button>
    </>
  );
};

export default Button;
