import { Outlet } from "react-router-dom";
import NavBar from "../src/Components/NavBar";
import Footer from "../src/Components/Footer";

function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
