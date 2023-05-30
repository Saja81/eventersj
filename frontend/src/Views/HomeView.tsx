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
        <div className="HomeView-desktop-div">
          <h3 className="HomeView-desktop-h3">Aktivitetskalendern nära dig</h3>
          <p className="HomeView-desktop-p">
            Vill du cykla, nätverka eller gå på konsert? Vi samlar alla olika
            evenemang på en och samma plats så att du enkelt kan hitta något som
            passar dig.
          </p>

          <PrimaryButton>
            <Link to="/eventlist">Upptäck alla event</Link>
          </PrimaryButton>
        </div>
      </div>
      <div className="main-divs">
        <div className="HomeView-mobile-div">
          <h3>Aktivitetskalendern nära dig</h3>
          <p>
            Vill du cykla, nätverka eller gå på konsert? Vi samlar alla olika
            evenemang på en och samma plats så att du enkelt kan hitta något som
            passar dig.
          </p>

          <div className="HomeView-button-div">
            <PrimaryButton>
              <Link to="/eventlist">Upptäck alla event</Link>
            </PrimaryButton>

            <SecondaryButton>Logga in</SecondaryButton>
          </div>
        </div>
        <div>
          {concerts && concerts !== undefined && (
            <CategoryDivs>
              <h3>Konserter</h3>
              <div className="HomeView-event-div event-div-museum">
                {concerts.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </CategoryDivs>
          )}
          {museums && museums !== undefined && (
            <CategoryDivs>
              <h3>Museum</h3>
              <div className="HomeView-event-div event-div-museum">
                {museums.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </CategoryDivs>
          )}
          {activities && activities !== undefined && (
            <CategoryDivs>
              <h3>Friluftsliv</h3>
              <div className="HomeView-event-div event-div-museum">
                {activities.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </CategoryDivs>
          )}
        </div>
      </div>
    </main>
  );
}

const CategoryDivs = styled.div`
  margin-top: 10px;

  @media (min-width: 900px) {
    h3 {
      margin: 0 0 16px 16px;
    }
  }
`;

export default HomeView;
