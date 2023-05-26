import { useEffect, useState } from "react";
import { Result } from "../useFetch";
import { Link } from "react-router-dom";

type EventProps = {
  eventprop: Result;
};

function EventCard(props: EventProps) {
  const [route, setRoute] = useState("/eventlist/" + props.eventprop.id_name);
  useEffect(() => {
    console.log(props.eventprop);
  }, [props.eventprop]);

  useEffect(() => {
    setRoute("/eventlist/" + props.eventprop.id_name);
  }, [props.eventprop.id_name]);

  // Länk till event funkar inte!!

  return (
    <Link to={route} className="EventCard-div">
      <div className="EventCard-image-div">
        <div className="EventCard-image-wrapper">
          <img
            className="EventCard-image"
            src={props.eventprop.image}
            alt="test"
          />
        </div>
        {props.eventprop.cost === null && (
          <div className="EventCard-gratis-div">
            <p>Gratis</p>
          </div>
        )}
      </div>
      <div className="EventCard-description">
        <h4>{props.eventprop.name}</h4>
        <p>{props.eventprop.category}</p>
      </div>
    </Link>
  );
}

export default EventCard;
