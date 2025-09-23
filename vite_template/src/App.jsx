import "./App.css";
import Card from "./components/Card";

function App() {
  const age = 26;

  const cards = [
    {
      title: "prueba de titulo 1",
      buttonText: "Call To Action 1",
      className: age > 18 ? "green" : "red",
    },
    {
      title: "prueba de titulo 2",
      buttonText: "Call To Action 2",
      className: age <= 18 ? "green" : "red",
    },
  ];

  return (
    <>
      {cards.map((card) => (
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
