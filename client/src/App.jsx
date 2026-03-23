import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecretAdmin from "./pages/SecretAdmin";
import SlideOverController from "./components/SlideOverController";
import WorkDetail from "./pages/WorkDetail";
import WorksPage from "./pages/WorksPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import DeeScepter from "./pages/DeeScepter";

export default function App() {
  return (
    <>
      <SlideOverController />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret-admin" element={<SecretAdmin />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/dee-scepter" element={<DeeScepter />} />
      </Routes>
    </>
  );
}