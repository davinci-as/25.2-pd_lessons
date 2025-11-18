import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home";
import { NewCard } from "./pages/NewCard";
import { LoginPage } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cards/add/" element={<NewCard />} />
    </Routes>
  );
}

export default App;
