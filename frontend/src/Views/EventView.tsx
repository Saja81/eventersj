import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Result } from "../useFetch";
import PrimaryButton from "../Components/PrimaryButton";
import image from "../camille-minouflet-d7M5Xramf8g-unsplash.jpg";

export type Params = {
  eventId: string;
};

function EventView() {
  const [event, setEvent] = useState<Result>(),
    { eventId } = useParams<Params>();

  useEffect(() => {
    fetch(`http://localhost:8080/events/${eventId}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setEvent(result);
      });
  }, [eventId]);

  useEffect(() => {
    console.log(event);
  }, [event]);

  return (
    <main>
      {event !== undefined && (
        <div>
          <div className="EventView-image-container">
            <img className="EventView-image" src={image} alt="bild" />
          </div>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>{event.category}</p>
          <p>{event.location}</p>
          <PrimaryButton>Boka biljetter</PrimaryButton>
        </div>
      )}
    </main>
  );
}

export default EventView;
