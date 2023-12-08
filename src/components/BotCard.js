import React from "react";

// Define CSS classes for different bot types
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onEnlist, onDischarge }) {
  // Function to handle enlisting a bot
  const handleEnlistClick = () => {
    onEnlist(bot);
  };

  // Function to handle discharging a bot
  const handleDischargeClick = (event) => {
    event.stopPropagation(); // Stop propagation to prevent calling onEnlist
    onDischarge(bot);
  };

  return (
    <div className="ui column">
      {/* Card representing a bot */}
      <div className="ui card" key={bot.id} onClick={handleEnlistClick}>
        {/* Bot avatar */}
        <div className="image">
          <img alt="Bot avatar" src={bot.avatar_url} />
        </div>
        {/* Bot information */}
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        {/* Additional bot details */}
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          {/* Button to discharge the bot */}
          <div className="ui center aligned segment basic">
            <button
              className="ui mini red button"
              onClick={handleDischargeClick}
            >
              🚀 Release
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotCard;

