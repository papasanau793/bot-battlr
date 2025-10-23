import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist, onDischarge, armyBots }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div
        className="bot-collection"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={onEnlist}
            onDischarge={onDischarge}
            inArmy={armyBots.some((b) => b.id === bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;