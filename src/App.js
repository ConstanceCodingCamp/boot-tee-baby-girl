import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import UpNext from "./components/UpNext"; // adjust path if UpNext lives elsewhere
import Footer from "./components/shared/Footer";
import Header from "./components/Header";
import SurveyForm from "./components/SurveyForm";
import SurveyList from "./components/SurveyList";
import SurveyStats from "./components/SurveyStats";
import { SurveyProvider } from "./Context/SurveyContext";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <SurveyProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SurveyForm />
                  <SurveyStats />
                  <SurveyList />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/upnext" element={<UpNext />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SurveyProvider>
  );
}

export default App;
