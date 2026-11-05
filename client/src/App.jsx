import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SecretAdmin from "./pages/SecretAdmin";
import SlideOverController from "./components/SlideOverController";
import WhatsAppButton from "./components/WhatsAppButton";
import WorkDetail from "./pages/WorkDetail";
import WorksPage from "./pages/WorksPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetail from "./pages/ArticleDetail";
import AdminArticles from "./pages/AdminArticles";
import ConstructionServices from "./pages/ConstructionServices";
import InvestorsPartners from "./pages/InvestorsPartners";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import DseiiPage from "./pages/DseiiPage";



export default function App() {
  return (
    <>
      <SlideOverController />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret-admin" element={<SecretAdmin />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/dee-scepter" element={<Navigate to="/construction-services" replace />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/admin/articles" element={<AdminArticles />} />
        <Route path="/construction-services" element={<ConstructionServices />} />
        <Route
          path="/investors"
          element={<InvestorsPartners />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dseii" element={<DseiiPage />} />
      </Routes>
      
    </>
  );
}