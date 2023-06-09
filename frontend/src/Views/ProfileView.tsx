import React, { useState, useEffect } from "react";

function ProfileView({ favouriteEventName }: { favouriteEventName: string }) {
  const [favouriteEvents, setFavouriteEvents] = useState<string[]>([]);

  useEffect(() => {
    const savedEvents = localStorage.getItem("favouriteEvents");
    if (savedEvents) {
      setFavouriteEvents(JSON.parse(savedEvents));
    }
  }, []);

  useEffect(() => {
    if (favouriteEventName && !favouriteEvents.includes(favouriteEventName)) {
      setFavouriteEvents((prevFavouriteEvents) => {
        const updatedEvents = [...prevFavouriteEvents, favouriteEventName];
        localStorage.setItem("favouriteEvents", JSON.stringify(updatedEvents));
        return updatedEvents;
      });
    }
  }, [favouriteEventName, favouriteEvents]);

  function removeAllFavourites() {
    localStorage.removeItem("favouriteEvents");
    setFavouriteEvents([]);
  }

  return (
    <div className="main-divs">
      <h3>Hej Sandra</h3>

      <h4>Det här är dina favoritevent:</h4>
      <div>
        <ul>
          {favouriteEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>

      <button onClick={removeAllFavourites}>To bort all favoritevent </button>
    </div>
  );
}

export default ProfileView;
