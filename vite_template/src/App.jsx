import "./App.css";
import Card from "./components/Card";

function App() {
  const age = 26;

  const criteria = (card) => {
    if (card.tag === "content-02") {
      return false;
    }
    return true;
  };
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

  return (
    <>
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
