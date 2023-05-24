import { useEffect, useContext } from "react";
import EventCard from "../Components/EventCard";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import { SomeContext } from "../SomeContext";
// import {
//   // Instagram,
//   // Twitter,
//   // Facebook,
//   // Youtube,
//   // Tiktok,
//   // GeoAltFill,
// } from "react-bootstrap-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomeView() {
  const concerts = useContext(SomeContext)?.concerts,
    museums = useContext(SomeContext)?.museums,
    activities = useContext(SomeContext)?.activities;

  useEffect(() => {
    console.log(concerts);
  }, [concerts]);

  return (
    <main>
      <div className="HomeView-image-div">
        <h1>Vad vill du göra ikväll?</h1>
      </div>
      <div className="main-divs">
        <h2>Aktivitetskalendern nära dig</h2>
        <p>
          Vill du cykla, nätverka eller gå på konsert? Vi samlar alla olika
          evenemang på en och samma plats så att du enkelt kan hitta något som
          passar dig.
        </p>

        <PrimaryButton>
          <Link to="/eventlist">Upptäck alla event</Link>
        </PrimaryButton>

        <SecondaryButton>Logga in</SecondaryButton>

        <div>
          {concerts && concerts !== undefined && (
            <CategoryDivs>
              <h2>Konserter</h2>
              <div className="event-div event-div-museum">
                {concerts.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </CategoryDivs>
          )}
          {museums && museums !== undefined && (
            <CategoryDivs>
              <h2>Museum</h2>
              <div className="event-div event-div-museum">
                {museums.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </CategoryDivs>
          )}
          {activities && activities !== undefined && (
            <CategoryDivs>
              <h2>Friluftsliv</h2>
              <div className="event-div event-div-museum">
                {activities.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </CategoryDivs>
          )}
        </div>
        {/* <Instagram />
        <Facebook />
        <Twitter />
        <Youtube />
        <Tiktok /> */}
        {/* <GeoAltFill /> */}
      </div>
    </main>
  );
}

const CategoryDivs = styled.div`
  margin-top: 10px;
`;

export default HomeView;
