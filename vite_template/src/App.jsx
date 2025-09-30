import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";

const age = 26;
const originalCards = [
  {
    tag: "content-01",
    title: "prueba de titulo 1",
    buttonText: "Call To Action 1",
    className: age > 18 ? "green" : "red",
  },
  {
    tag: "content-02",
    title: "prueba de titulo 2",
    buttonText: "Call To Action 2",
    className: age <= 18 ? "green" : "red",
  },
  {
    tag: "content-01",
    title: "prueba de titulo 2",
    buttonText: "Call To Action 2",
    className: age <= 18 ? "green" : "red",
  },
];

const criteria = (card) => {
  if (card.tag === "content-02") {
    return false;
  }
  return true;
};

function App() {
  const [cards, setCards] = useState([]);

  return (
    <>
      <Button
        onClick={() => {
          setCards(originalCards);
        }}
      />
      {cards.filter(criteria).map((card, i) => (
        <Card
          key={i}
          title={card.title}
          buttonText={card.buttonText}
          className={card.className}
        />
      ))}
    </>
  );
}

export default App;
