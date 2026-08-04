import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecretAdmin from "./pages/SecretAdmin";
import SlideOverController from "./components/SlideOverController";
import WorkDetail from "./pages/WorkDetail";
import WorksPage from "./pages/WorksPage";
import DeeScepter from "./pages/DeeScepter";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetail from "./pages/ArticleDetail";
import AdminArticles from "./pages/AdminArticles";
import ConstructionServices from "./pages/ConstructionServices";

export default function App() {
  return (
    <>
      <SlideOverController />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret-admin" element={<SecretAdmin />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/dee-scepter" element={<DeeScepter />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/admin/articles" element={<AdminArticles />} />
        <Route path="/construction-services" element={<ConstructionServices />} />
      </Routes>
    </>
  );
}