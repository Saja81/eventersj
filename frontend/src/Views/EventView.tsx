import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Result } from "../useFetch";
import PrimaryButton from "../Components/PrimaryButton";
import { Clock, ChevronRight, Star, StarFill } from "react-bootstrap-icons";
import styled from "styled-components";

export type Params = {
  eventId: string;
};

export interface MyComponentProps {
  CategoryColor: string;
}

export interface Openhours {
  event_id: Number;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

function EventView() {
  const [event, setEvent] = useState<Result>(),
    [isRotated, setIsRotated] = useState(false),
    [hours, setHours] = useState<Openhours>(),
    [currentHours, setCurrentHours] = useState<string>(""),
    [hasOpenHours, setHasOpenHours] = useState(false),
    [showAllDates, setShowAllDates] = useState(false),
    [isStarClicked, setIsStarClicked] = useState(false),
    currentDay = new Date().getDay(),
    currentWeekday = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ][currentDay],
    { eventId } = useParams<Params>();

  useEffect(() => {
    fetch(`/events/${eventId}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setEvent(result);
      });
  }, [eventId]);

  useEffect(() => {
    if (event !== undefined) {
      if (event.openhours === "true") {
        fetch(`/openhours/${event.id}`)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setHours(result);
          });
        setHasOpenHours(true);
      } else if (event.date !== null) {
        setHasOpenHours(true);
      }
    }
  }, [event, currentDay]);

  useEffect(() => {
    if (hours !== undefined) {
      console.log(hours);
      setCurrentHours(String(hours[currentWeekday as keyof Openhours]));
    }
  }, [hours, currentWeekday]);

  useEffect(() => {
    console.log(currentHours);
  }, [currentHours]);

  function handleClick() {
    setIsRotated(!isRotated);
    setShowAllDates(!showAllDates);
  }

  function handleStarClick() {
    setIsStarClicked(!isStarClicked);
  }

  return (
    <main>
      {event !== undefined && (
        <div>
          <div className="EventView-image-container">
            <img className="EventView-image" src={event.image} alt="bild" />
            <h2 className="EventView-h2">{event.name}</h2>
            {!isStarClicked ? (
              <Star className="Bootstrap-star" onClick={handleStarClick} />
            ) : (
              <StarFill className="Bootstrap-star" onClick={handleStarClick} />
            )}
            {event.cost === null && (
              <div className="EventView-gratis-div">
                <p className="EvenView-gratis-p">Gratis</p>
              </div>
            )}
          </div>
          <div className="main-divs">
            <div className="EventView-desktop-div">
              <div className="EventView-intro-div">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
              </div>
              <div className="EventView-info-div">
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
                    <p className="p1 EventView-p">{event.location}</p>
                    <p className="EventView-p EventView-grey-p">
                      {event.adress}
                    </p>
                  </div>
                </div>
                {hasOpenHours && (
                  <div className="EventView-divs">
                    <Clock className="Bootstrap-icons Bootstrap-clock" />

                    {(currentHours !== "" && (
                      <div className="EventView-openhours-div">
                        <div>
                          <p className="p1">
                            Idag <strong>•</strong> {currentHours}
                          </p>
                          {!showAllDates && (
                            <p className="EventView-grey-p">
                              Visa fler tillfällen
                            </p>
                          )}
                        </div>
                        <ChevronRight
                          style={{
                            cursor: "pointer",
                            transform: isRotated
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                          onClick={handleClick}
                        />
                      </div>
                    )) ||
                      (event.date !== null && (
                        <div>
                          <p className="p1">{event.date}</p>
                        </div>
                      ))}
                  </div>
                )}
                {showAllDates && (
                  <div>
                    {hours !== undefined && (
                      <dl>
                        <DottedLine />
                        <ListDiv>
                          <dt>Måndag:</dt>
                          <dd>{hours.monday}</dd>
                        </ListDiv>
                        <DottedLine />
                        <ListDiv>
                          <dt>Tisdag:</dt>
                          <dd>{hours.tuesday}</dd>
                        </ListDiv>
                        <DottedLine />
                        <ListDiv>
                          <dt>Onsdag:</dt>
                          <dd>{hours.wednesday}</dd>
                        </ListDiv>
                        <DottedLine />
                        <ListDiv>
                          <dt>Torsdag:</dt>
                          <dd>{hours.thursday}</dd>
                        </ListDiv>
                        <DottedLine />
                        <ListDiv>
                          <dt>Fredag:</dt>
                          <dd>{hours.friday}</dd>
                        </ListDiv>
                        <DottedLine />
                        <ListDiv>
                          <dt>Lördag:</dt>
                          <dd>{hours.saturday}</dd>
                        </ListDiv>
                        <DottedLine />
                        <ListDiv>
                          <dt>Söndag:</dt>
                          <dd>{hours.sunday}</dd>
                        </ListDiv>
                        <DottedLine />
                      </dl>
                    )}
                  </div>
                )}
                {event.cost !== null && (
                  <div className="EventView-divs">
                    <p className="p1 EventView-cost">Pris: {event.cost}</p>
                  </div>
                )}
                {event.link !== null && (
                  <PrimaryButton>
                    <a target="_blank" rel="noreferrer" href={event.link}>
                      Boka biljetter
                    </a>
                  </PrimaryButton>
                )}
              </div>
            </div>
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

const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  margin: auto;
`;

const DottedLine = styled.hr`
  border-top: 1px dotted black;
  margin: 10px 0 10px 0;
`;

export default EventView;
