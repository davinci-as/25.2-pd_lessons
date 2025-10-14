import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import { getData } from "./lib/data";
import { criteria } from "./lib/filters";

function App() {
  const [cards, setCards] = useState([]);

  const updateData = async () => {
    const data = await getData();
    setCards(data);
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          updateData();
        }}
      />

      {!cards.filter(criteria).length ? (
        <>
          <h1>Los datos no fueron cargados todavía</h1>
          <h3>Loading ...</h3>
        </>
      ) : (
        cards
          .filter(criteria)
          .map((card, i) => (
            <Card
              key={i}
              title={card.title}
              buttonText={card.buttonText}
              className={card.className}
            />
          ))
      )}
    </>
  );
}

export default App;
