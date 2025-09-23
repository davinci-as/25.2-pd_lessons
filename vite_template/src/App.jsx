import "./App.css";
import Card from "./components/Card";

function App() {
  const age = 26;
  return (
    <>
      <Card
        title="prueba de titulo 1"
        buttonText={"Call To Action 1"}
        className={age > 18 ? "green" : "red"}
      />
      <Card
        title="prueba de titulo 2"
        buttonText={"Call To Action 2"}
        className={age <= 18 ? "green" : "red"}
      />
    </>
  );
}

export default App;
