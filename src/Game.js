import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Game() {
  const [gameData, setGameData] = useState(null);
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getGameData = async () => {
      const result = await fetch(`http://localhost:3001/categories/${gameId}`);
      const data = await result.json();
      if (data.error) return navigate("/", { replace: true });
      setGameData(data.category);
    };

    getGameData();
  }, [gameId, navigate]);

  if (!gameData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{gameData.title}</h1>
      <ul>
        {gameData.answers.map(answer => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
