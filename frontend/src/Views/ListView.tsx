import BigEventCard from "../Components/BigEventCard";
import SearchField from "../Components/SearchField";
import { SomeContext } from "../SomeContext";
import { useContext } from "react";

function ListView() {
  const eventResult = useContext(SomeContext)?.eventResult;
  return (
    <main className="main-divs">
      <SearchField />
      <div className="ListView-grid">
        {eventResult?.map((event) => (
          <BigEventCard eventprop={event}></BigEventCard>
        ))}
      </div>
    </main>
  );
}

export default ListView;
