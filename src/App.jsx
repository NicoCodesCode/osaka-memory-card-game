import { Routes, Route } from "react-router-dom";
import MemoryGame from "./components/MemoryGame";
import TitleScreen from "./components/TItleScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TitleScreen />} />
      <Route path="/play" element={<MemoryGame />} />
    </Routes>
  );
}
