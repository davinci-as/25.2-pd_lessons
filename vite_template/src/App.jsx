import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home";
import { NewCard } from "./pages/NewCard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cards/add/" element={<NewCard />} />
    </Routes>
  );
}

export default App;
