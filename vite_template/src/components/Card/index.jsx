import Button from "../Button";
//import styles from "./index.module.css";

const Card = ({ className, title, buttonText }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <Button text={buttonText} />
    </div>
  );
};

export default Card;
