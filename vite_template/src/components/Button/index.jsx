const Button = ({ onClick, text, ...props }) => {
  console.log("props: ", props);
  return (
    <>
      <button onClick={onClick}>{text || "No estás pasando un texto"}</button>
    </>
  );
};

export default Button;
