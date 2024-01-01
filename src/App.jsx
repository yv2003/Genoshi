import React from "react";
import PricePg from "./pages/PricePg/PricePg";
import ProfilePg from "./pages/Profile/ProfilePg";
import "./index.css";
import { Route, Routes} from "react-router-dom";
import CreateNewGraphPage from "./pages/Details/Details";
function App() {
  return (
    <>
      {/* <ProfilePg />
      <PricePg />
      <CreateNewGraphPage /> */}
      <Routes>
        <Route path="/" element={<ProfilePg />} />
        <Route path="/prices" element={<PricePg />} />
        <Route path="/events" element={<CreateNewGraphPage />} />
      </Routes>
    </>
  );
}

export default App;
