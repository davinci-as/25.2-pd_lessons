import "./App.css";
import Card from "./components/Card";

function App() {
  const age = 26;

  const cards = [
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

  const tempCards = [];

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].tag === "content-01") {
      tempCards.push(cards[i]);
    }
  }

  return (
    <>
      {tempCards.map((card) => (
        <Card
          title={card.title}
          buttonText={card.buttonText}
          className={card.className}
        />
      ))}
    </>
  );
}

export default App;
