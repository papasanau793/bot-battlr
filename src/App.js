import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  // Fetch bots from server
  useEffect(() => {
    fetch("https://json-server-vercel-bjbw.vercel.app/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Failed to fetch bots:", err));
  }, []);

  // Enlist bot (add to army if not already there)
  const handleEnlist = (bot) => {
    if (!armyBots.some((b) => b.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  };

  // Release bot (remove from army, not from full list)
  const handleRelease = (bot) => {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id));
  };

  // Discharge bot (delete from backend and remove from everywhere)
  const handleDischarge = (bot) => {
    fetch(`https://json-server-vercel-bjbw.vercel.app/bots${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmyBots(armyBots.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Failed to discharge bot:", err));
  };

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>:robot_face: Bot Battlr</h1>

  <YourBotArmy
    armyBots={armyBots}
    onRelease={handleRelease}
    onDischarge={handleDischarge}
  />

  <hr style={{ margin: "30px 0" }} />

  <BotCollection
    bots={bots}
    armyBots={armyBots}
    onEnlist={handleEnlist}
    onDischarge={handleDischarge}
  />
</div>
  );
}

export default App;

