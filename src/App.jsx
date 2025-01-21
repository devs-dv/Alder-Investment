import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import { CreateNews } from "./components/CreateNews";
import { NewsLists } from "./components/NewsLists";
import { EditNews } from "./components/EditNews";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { useAuth } from "./hooks/useAuth";
import LandingPage from "./MainPage";
import News1 from "./NewsSec/AlderNewsBulletin";
import OurPeople from "./OurPeople";
import ServicesSection from "./OurServices";
import Philosiphy from "./Philosiphy";
import PrivacyPolicy from "./PrivacyPolicy";
import ScrollToTop from "./ScrollToTop";
import TermsAndConditions from "./TermsAndConditions";
import Dashboard from "./Dashboard";
import NewsDetail from "./NewsDetail";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/Admin" replace />;
  }

  return children;
}

function App() {
  const [language, setLanguage] = useState(true); // true = English, false = Korean
  const [loading, setLoading] = useState(true);

  return (
    <div className="">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage
                language={language}
                setLanguage={setLanguage}
                loading={loading}
                setLoading={setLoading}
              />
              {!loading && (
                <>
                  {/* Language Toggle Button */}
                  <div className="fixed top-5 right-48 z-[52] nest-hub:right-28 px-4 py-1 hidden custom-lg:block text-white">
                    <button
                      className={`${
                        language ? "font-bold" : "font-extralight"
                      }`}
                      onClick={() => setLanguage(true)}
                    >
                      ENG
                    </button>
                    /
                    <button
                      className={`${
                        language ? "font-extralight" : "font-bold"
                      }`}
                      onClick={() => setLanguage(false)}
                    >
                      KR
                    </button>
                  </div>

                  <Philosiphy id="philosophy" language={language} />
                  <ServicesSection id="services" language={language} />
                  <OurPeople id="people" language={language} />

                  <ContactUs id="contact" language={language} />
                  <Footer language={language} />
                </>
              )}
            </>
          }
        />

        <Route
          path="/privacy"
          element={
            <>
              <PrivacyPolicy language={language} setLanguage={setLanguage} />
              <Footer language={language} />
            </>
          }
        />

        {/* <Route
          path="/terms"
          element={
            <>
              <TermsAndConditions
                language={language}
                setLanguage={setLanguage}
              />
              <Footer language={language} />
            </>
          }
        /> */}
        <Route
          path="/news"
          element={
            <>
              <News1 />
              <Footer language={language} />
            </>
          }
        />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="news-list" replace />} />
          <Route path="news-list" element={<NewsLists />} />
          <Route path="create-news" element={<CreateNews />} />
          <Route path="edit-news/:id" element={<EditNews />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
