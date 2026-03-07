import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecretAdmin from "./pages/SecretAdmin";
import SlideOverController from "./components/SlideOverController";
import WorkDetail from "./pages/WorkDetail";



export default function App() {
  return (
    <>
      <SlideOverController />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret-admin" element={<SecretAdmin />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Routes>
    </>
  );
}