import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { LayananPage } from "./components/LayananPage";
import { GalleryPage } from "./components/GalleryPage";
import { KeanggotaanPage } from "./components/KeanggotaanPage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/layanan" element={<LayananPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route
              path="/keanggotaan"
              element={<KeanggotaanPage />}
            />
            <Route path="/kontak" element={<ContactPage />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}