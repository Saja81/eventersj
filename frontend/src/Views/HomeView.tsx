import EventCard from "../Components/EventCard";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
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
  return (
    <main>
      <header className="App-header">
        <div className="HomeView-image-div">
          <h1>Vad vill du göra ikväll?</h1>
        </div>
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
          <p>eventcards:</p>
          <div className="event-div-test">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        <p>Ikoner:</p>
        <Clock />
        <ChevronRight />
        {/* <Instagram />
        <Facebook />
        <Twitter />
        <Youtube />
        <Tiktok /> */}
        <GeoAltFill />
      </header>
    </main>
  );
}

export default HomeView;
