import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "../src/Root";
import HomeView from "../src/Views/HomeView";
import ListView from "./Views/ListView";
import EventView from "./Views/EventView";
import { useFetchEvents, Result } from "./useFetch";
import { useMemo } from "react";
import { SomeContext } from "./SomeContext";

function App() {
  const eventResult: Result[] | [] = useFetchEvents();

  const concerts = useMemo(() => {
    if (eventResult) {
      return eventResult.filter((item) => item.category === "Konsert");
    } else {
      return undefined;
    }
  }, [eventResult]);

  const museums = useMemo(() => {
    if (eventResult) {
      return eventResult.filter((item) => item.category === "Museum");
    } else {
      return undefined;
    }
  }, [eventResult]);

  const activities = useMemo(() => {
    if (eventResult) {
      return eventResult.filter((item) => item.category === "Friluftsliv");
    } else {
      return undefined;
    }
  }, [eventResult]);

  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <ListView />, path: "/eventlist" },
        { element: <EventView />, path: "/:eventId" },
      ],
      element: <Root />,
    },
  ]);

  return (
    <SomeContext.Provider
      value={{
        concerts,
        museums,
        activities,
        eventResult,
      }}
    >
      <RouterProvider router={router} />
    </SomeContext.Provider>
  );
}

export default App;
