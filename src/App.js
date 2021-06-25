import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import GameRoutes from "./GameRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <GameRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
