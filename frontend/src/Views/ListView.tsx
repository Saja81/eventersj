import BigEventCard from "../Components/BigEventCard";
import SearchField from "../Components/SearchField";
import { SomeContext } from "../SomeContext";
import { useContext, useEffect } from "react";

function ListView() {
  const eventResult = useContext(SomeContext)?.eventResult,
    filteredEvents = useContext(SomeContext)?.filteredEvents,
    setFilteredEvents = useContext(SomeContext)?.setFilteredEvents;

  useEffect(() => {
    console.log(filteredEvents);
    console.log(eventResult);
    if (filteredEvents) {
      if (filteredEvents?.length < 1 && eventResult) {
        setFilteredEvents?.(eventResult);
      }
    }
  }, [filteredEvents, eventResult, setFilteredEvents]);

  useEffect(() => {
    console.log(filteredEvents);
  }, [filteredEvents]);

  return (
    <main className="main-divs">
      <SearchField />
      <div className="ListView-grid">
        {filteredEvents?.map((event) => (
          <BigEventCard eventprop={event}></BigEventCard>
        ))}
      </div>
    </main>
  );
}

export default ListView;
