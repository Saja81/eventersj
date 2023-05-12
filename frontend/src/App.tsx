import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "../src/Root";
import HomeView from "../src/Views/HomeView";
import ListView from "./Views/ListView";
import EventView from "./Views/EventView";

function App() {
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

  return <RouterProvider router={router} />;
}

export default App;
