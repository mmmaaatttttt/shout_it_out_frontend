import { Routes, Route } from "react-router-dom";
import CategoryList from "./CategoryList";
import Game from "./Game";

function GameRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CategoryList />} />
      <Route path="/games/:gameId" element={<Game />} />
    </Routes>
  );
}

export default GameRoutes;
