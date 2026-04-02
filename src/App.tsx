import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { DonatePage } from "./pages/DonatePage";
import { EventsOutreachPage } from "./pages/EventsOutreachPage";
import { ImpactPage } from "./pages/ImpactPage";
import { OurKitsPage } from "./pages/OurKitsPage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/our-kits" element={<OurKitsPage />} />
        <Route path="/events-outreach" element={<EventsOutreachPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
