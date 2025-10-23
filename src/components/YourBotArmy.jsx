import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ armyBots, onRelease, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {armyBots.length === 0 ? (
        <p style={{ textAlign: "center" }}>No bots enlisted yet!</p>
      ) : (
        <div
          className="bot-army"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {armyBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onRelease={onRelease}
              onDischarge={onDischarge}
              inArmy={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;

