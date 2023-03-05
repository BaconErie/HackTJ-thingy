import { useState } from "react";
import BlockedLocations from "./BlockedLocations";

function Header() {
  const [showLocations, setShowLocation] = useState(false);

  const handleLocationsToggle = () => {
    setShowLocation((prevState) => !prevState);
  };

  return (
    <header className="header">
      ProcrastiNOT
      <h3>
        Getting Your Work Done, One Task At A Time
      </h3>
      <div className="blockedLocations">
        <button class = "edit" id="toggleBlockedLocations" onClick={handleLocationsToggle}>
          Edit Preferences
        </button>
        {showLocations && <BlockedLocations id="blockedLocations" />}
      </div>
    </header>
  );
}

export default Header;
