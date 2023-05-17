import { useEffect } from "react";
import image from "../camille-minouflet-d7M5Xramf8g-unsplash.jpg";
import { Result } from "../useFetch";
import { Link } from "react-router-dom";

type EventProps = {
  eventprop: Result;
};

function EventCard(props: EventProps) {
  useEffect(() => {
    console.log(props.eventprop);
  }, [props.eventprop]);

  return (
    <Link
      to={props.eventprop.id_name}
      className="EventCard-div BigEventCard-div"
    >
      <div className="EventCard-image-div BigEventCard-image-div">
        <div className="EventCard-image-wrapper">
          <img className="EventCard-image" src={image} alt="test" />
        </div>
      </div>
      <div className="EventCard-description">
        <h3>{props.eventprop.name}</h3>
        {props.eventprop.category === "Konsert" ? (
          <p>{props.eventprop.location}</p>
        ) : (
          <p>{props.eventprop.city}</p>
        )}
      </div>
    </Link>
  );
}

export default EventCard;
