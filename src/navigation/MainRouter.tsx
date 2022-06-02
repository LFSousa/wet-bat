import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import HomePage from "../pages/HomePage";
import QuoteDetailsPage from "../pages/QuoteDetailsPage";
import QuotesPage from "../pages/QuotesPage";
import Error404 from "./Error404";

export default function MainRouter() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/quotes/:id" element={<QuoteDetailsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
