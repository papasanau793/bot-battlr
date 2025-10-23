import React from "react";

function BotCard({ bot, onEnlist, onRelease, onDischarge, inArmy }) {
  const { name, avatar_url, catchphrase, bot_class, health, damage, armor } = bot;

  const handleClick = () => {
    if (inArmy) {
      onRelease(bot);
    } else {
      onEnlist(bot);
    }
  };

  const handleDischarge = (e) => {
    e.stopPropagation(); // Prevent triggering enlist/release
    onDischarge(bot);
  };

  return (
    <div
      onClick={handleClick}
      className="bot-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        position: "relative",
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
      }}
    >
      <img
        src={avatar_url}
        alt={name}
        style={{ 
            width: "120px",
            height: "120px",
            borderRadius: "15px",
            objectFit: "cover",
        }}
      />
      <h3>{name}</h3>
      <p><em>"{catchphrase}"</em></p>
      <p><strong>Class:</strong> {bot_class}</p>
      <p>:crossed_swords: {damage} | :shield: {armor} | :heart: {health}</p>

  {inArmy && (
    <button
      onClick={handleDischarge}
      style={{
        position: "absolute",
        top: "5px",
        right: "5px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "25px",
        height: "25px",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      ×
    </button>
  )}
</div>
  );
}

export default BotCard;

