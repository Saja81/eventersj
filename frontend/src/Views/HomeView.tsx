import { useEffect, useContext } from "react";
import EventCard from "../Components/EventCard";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import { SomeContext } from "../SomeContext";
import {
  Clock,
  ChevronRight,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Tiktok,
  GeoAltFill,
} from "react-bootstrap-icons";

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
        <div>
          <p>primary:</p>
          <PrimaryButton>Upptäck alla event</PrimaryButton>
        </div>
        <div>
          <p>secondary:</p>
          <SecondaryButton>Logga in</SecondaryButton>
        </div>
        <div>
          {concerts && concerts !== undefined && (
            <div>
              <h2>Konserter</h2>
              <div className="event-div event-div-museum">
                {concerts.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </div>
          )}
          {museums && museums !== undefined && (
            <div>
              <h2>Museum</h2>
              <div className="event-div event-div-museum">
                {museums.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </div>
          )}
          {activities && activities !== undefined && (
            <div>
              <h2>Friluftsliv</h2>
              <div className="event-div event-div-museum">
                {activities.map((event) => (
                  <EventCard eventprop={event} />
                ))}
              </div>
            </div>
          )}
        </div>
        <p>Ikoner:</p>
        <Clock />
        <ChevronRight />
        <Instagram />
        <Facebook />
        <Twitter />
        <Youtube />
        <Tiktok />
        <GeoAltFill />
      </div>
    </main>
  );
}

export default HomeView;
