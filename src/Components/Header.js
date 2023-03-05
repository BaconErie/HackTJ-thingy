import { useState } from "react";
import BlockedLocations from "./BlockedLocations";

function Header() {
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
        {showLocations && <BlockedLocations id="blockedLocations" />}
      </div>
    </header>
  );
}

export default Header;
