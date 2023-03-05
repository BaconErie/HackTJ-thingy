import { useState } from "react";
import BlockedLocations from "./BlockedLocations";

function Header({ locations }) {
  const [showLocations, setShowLocation] = useState(false);

  const handleLocationsToggle = () => {
    setShowLocation((prevState) => !prevState);
  };

  return (
    <header className="header">
      Header Name
      <div className="blockedLocations">
        <button id="toggleBlockedLocations" onClick={handleLocationsToggle}>
          Open
        </button>
        {showLocations && (
          <BlockedLocations id="blockedLocations" locations={locations} />
        )}
      </div>
    </header>
  );
}

export default Header;
