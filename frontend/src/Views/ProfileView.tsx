import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Result } from "../useFetch";

function ProfileView() {
  const location = useLocation();
  const { username } = location.state;
  const [favoriteEvents, setFavoriteEvents] = useState<Result[]>([]);

  useEffect(() => {
    const storedFavoriteEvents = JSON.parse(
      localStorage.getItem("favoriteEvents") || "[]"
    );
    setFavoriteEvents(storedFavoriteEvents);
  }, []);

  const removeFromFavorites = (eventId: number) => {
    const updatedFavorites = favoriteEvents.filter(
      (event) => event.id !== eventId
    );
    setFavoriteEvents(updatedFavorites);
    localStorage.setItem("favoriteEvents", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="main-divs">
      <h3>Hej {username}</h3>
      <h4>Dina favoritevent:</h4>
      <ul>
        {favoriteEvents.map((event) => (
          <li key={event.id}>
            {event.name}
            <button onClick={() => removeFromFavorites(event.id)}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileView;
