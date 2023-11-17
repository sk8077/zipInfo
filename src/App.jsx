// import LocationForm from "./components/LocationForm.jsx";
import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default App;
