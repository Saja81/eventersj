import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Result } from "../useFetch";
import PrimaryButton from "../Components/PrimaryButton";
import { Clock } from "react-bootstrap-icons";
import styled from "styled-components";

export type Params = {
  eventId: string;
};

export interface MyComponentProps {
  CategoryColor: string;
}

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
            <img className="EventView-image" src={event.image} alt="bild" />
          </div>
          <div className="main-divs">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <div className=" EventView-divs">
              <img
                className="EventView-location-image"
                src={event.location_image}
                alt="location"
              />
              <div>
                <div className="EventView-category-div">
                  <CategoryPin
                    CategoryColor={
                      event.category === "Konsert"
                        ? "#8675f1"
                        : event.category === "Museum"
                        ? "#F19075"
                        : "#FDCB08"
                    }
                    className="EventView-category-button"
                  />
                  <p className="EventView-p EventView-category">
                    {event.category}
                  </p>
                </div>
                <h3 className="EventView-p EventView-location">
                  {event.location}
                </h3>
                <p className="EventView-p ">{event.adress}</p>
              </div>
            </div>
            <div className="EventView-divs">
              <Clock className="Bootstrap-clock" />
              <p>{event.date}</p>
            </div>
            {event.cost !== undefined && (
              <div className="EventView-divs">
                <h3>Pris: {event.cost}</h3>
              </div>
            )}
            <PrimaryButton>Boka biljetter</PrimaryButton>
          </div>
        </div>
      )}
    </main>
  );
}

const CategoryPin = styled.span<MyComponentProps>`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.CategoryColor};
  border-radius: 50%;
  margin-right: 8px;
`;

export default EventView;
