import React, { useState } from "react";
import MouseDownRemoveDiv from "./MouseDownRemoveDiv";

function BlockedLocations() {
  const [blockedLocations, setBlockedLocations] = useState({
    url: [],
    category: []
  });

  const addLocations = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const locationType = formData.get("locationType");

    if (locationType === "category" || locationType === "url") {
    } else {
      console.error("Not a category or url");
    }
    const location = formData.get("location");

    console.log(!blockedLocations[locationType].includes(location));

    if (!blockedLocations[locationType].includes(location) && location !== "") {
      const currentBlockedLocation = { ...blockedLocations };
      currentBlockedLocation[locationType].push(location);

      setBlockedLocations(currentBlockedLocation);
    }
  };

  const removeLocation = (locationType, indexToFilter) => {
    const newBlockedLocations = { ...blockedLocations };

    newBlockedLocations[locationType] = blockedLocations[locationType].filter(
      (element, index) => {
        return index !== indexToFilter;
      }
    );

    setBlockedLocations(newBlockedLocations);
  };

  console.log(blockedLocations.url);
  console.log(blockedLocations.category);

  return (
    <div>
      <p class="desc">urls</p>
      {blockedLocations.url.map((url, index) => {
        return (
          <MouseDownRemoveDiv
            key={index}
            handleRemove={() => {
              removeLocation("url", index);
            }}>
            {url}
          </MouseDownRemoveDiv>
        );
      })}
      <p class="desc">categories</p>
      {blockedLocations.category.map((category, index) => {
        return (
          <MouseDownRemoveDiv
            key={index}
            handleRemove={() => {
              removeLocation("category", index);
            }}>
            {category}
          </MouseDownRemoveDiv>
        );
      })}
      <form class = "dropdown" onSubmit={addLocations}>
        <select class = "dropbtn" name="locationType">
          <option class = "dropdown-content" value="url">urls</option>
          <option class = "dropdown-content" value="category">categories</option>
        </select>
        <input class="inputInput" type="text" name="location" />
      </form>
    </div>
  );
}

export default BlockedLocations;
