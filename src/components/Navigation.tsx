import { Link, useLocation } from "react-router-dom";
import { Mountain } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/layanan", label: "Layanan" },
    { path: "/galeri", label: "Galeri" },
    { path: "/keanggotaan", label: "Keanggotaan" },
    { path: "/kontak", label: "Kontak" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-primary">UKM HIMAPALA</span>
          </Link>
          
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
