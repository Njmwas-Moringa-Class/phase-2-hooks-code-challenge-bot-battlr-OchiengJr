import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ onEnlist, onRelease, onDischarge }) {
  // State to hold the list of bots
  const [bots, setBots] = useState([]);

  // Fetch bots data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch the bot data");
        }
        return response.json();
      })
      .then((data) => setBots(data))
      .catch((error) => console.error("Error encountered", error));
  }, []);

  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Map through the bots array and render BotCard for each bot */}
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={onEnlist}
            onRelease={onRelease} // Updated: Changed onRelease to onRelease
            onDischarge={onDischarge} // Updated: Added onDischarge
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

