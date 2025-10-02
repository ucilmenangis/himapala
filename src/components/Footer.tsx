import { Mountain, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8" />
              <span className="text-xl">UKM HIMAPALA</span>
            </Link>
            <p className="text-white/80 mb-6">
              Menjelajahi keajaiban alam bersama sejak 1985. Bergabunglah dengan kami dalam petualangan yang menantang semangat.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/ukm_himapala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@ukm_himapala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-white/80 hover:text-white transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="text-white/80 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/keanggotaan" className="text-white/80 hover:text-white transition-colors">
                  Keanggotaan
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-white/80 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@himapala.org"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>info@himapala.org</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+62 812-3456-7890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Kampus Universitas<br />Jl. Pendidikan No. 123<br />Jakarta 12345</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="mb-4">Temukan Kami</h3>
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1753871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi UKM HIMAPALA"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 UKM HIMAPALA. Hak cipta dilindungi.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Syarat Layanan
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Kebijakan Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}