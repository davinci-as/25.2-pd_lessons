import Button from "../Button";
//import styles from "./index.module.css";

const Card = (props) => {
  return (
    <div className={props?.className}>
      <h3>{props.title}</h3>
      <Button text={props.buttonText} />
    </div>
  );
};

export default Card;
