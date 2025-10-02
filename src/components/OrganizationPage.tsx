import { Card } from "./ui/card";
import { Mail } from "lucide-react";

interface OrgMember {
  name: string;
  role: string;
  email?: string;
}

export function OrganizationPage() {
  const president: OrgMember = {
    name: "Budi Santoso",
    role: "Ketua Umum",
    email: "budi.santoso@himapala.org"
  };

  const vicePresidents: OrgMember[] = [
    {
      name: "Siti Nurhaliza",
      role: "Wakil Ketua Operasional",
      email: "siti.nurhaliza@himapala.org"
    },
    {
      name: "Ahmad Fauzi",
      role: "Wakil Ketua Konservasi",
      email: "ahmad.fauzi@himapala.org"
    }
  ];

  const directors: OrgMember[] = [
    {
      name: "Rina Wijaya",
      role: "Direktur Acara",
      email: "rina.wijaya@himapala.org"
    },
    {
      name: "Dedi Kurniawan",
      role: "Direktur Pelatihan",
      email: "dedi.kurniawan@himapala.org"
    },
    {
      name: "Fitri Handayani",
      role: "Direktur Komunikasi",
      email: "fitri.handayani@himapala.org"
    },
    {
      name: "Andi Pratama",
      role: "Direktur Keanggotaan",
      email: "andi.pratama@himapala.org"
    }
  ];

  const coordinators: OrgMember[] = [
    { name: "Bayu Saputra", role: "Koordinator Jalur - Wilayah Utara" },
    { name: "Dewi Lestari", role: "Koordinator Jalur - Wilayah Selatan" },
    { name: "Eko Prasetyo", role: "Koordinator Jalur - Wilayah Timur" },
    { name: "Maya Indah", role: "Koordinator Jalur - Wilayah Barat" },
    { name: "Rudi Hermawan", role: "Koordinator Program Pemuda" },
    { name: "Citra Ayu", role: "Koordinator Relawan" }
  ];

  const MemberCard = ({ member, size = "default" }: { member: OrgMember; size?: "large" | "default" | "small" }) => {
    const sizeClasses = {
      large: "p-8",
      default: "p-6",
      small: "p-4"
    };

    return (
      <Card className={`${sizeClasses[size]} bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-lg transition-shadow text-center`}>
        <div className={`${size === "large" ? "w-20 h-20" : size === "default" ? "w-16 h-16" : "w-12 h-12"} bg-primary rounded-full mx-auto mb-4 flex items-center justify-center`}>
          <span className={`${size === "large" ? "text-3xl" : size === "default" ? "text-2xl" : "text-xl"} text-white`}>
            {member.name.charAt(0)}
          </span>
        </div>
        <h3 className={`${size === "small" ? "text-base" : ""} text-primary mb-1`}>{member.name}</h3>
        <p className={`${size === "small" ? "text-sm" : ""} text-muted-foreground mb-2`}>{member.role}</p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1 text-sm text-primary/70 hover:text-primary transition-colors"
          >
            <Mail className="h-3 w-3" />
            Email
          </a>
        )}
      </Card>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl text-primary mb-6">Struktur Organisasi</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kenali tim yang berdedikasi memimpin UKM HIMAPALA
          </p>
        </div>

        {/* Organizational Chart */}
        <div className="max-w-6xl mx-auto">
          {/* President - Top Level */}
          <div className="flex justify-center mb-12">
            <div className="w-80">
              <MemberCard member={president} size="large" />
            </div>
          </div>

          {/* Connector Line */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-12 bg-primary/30" />
          </div>

          {/* Vice Presidents - Second Level */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            {vicePresidents.map((vp, index) => (
              <MemberCard key={index} member={vp} size="default" />
            ))}
          </div>

          {/* Connector Line */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-12 bg-primary/30" />
          </div>

          {/* Directors - Third Level */}
          <div className="mb-8">
            <h2 className="text-2xl text-primary text-center mb-6">Direktur Departemen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {directors.map((director, index) => (
                <MemberCard key={index} member={director} size="default" />
              ))}
            </div>
          </div>

          {/* Connector Line */}
          <div className="flex justify-center my-8">
            <div className="w-1 h-12 bg-primary/30" />
          </div>

          {/* Coordinators - Fourth Level */}
          <div>
            <h2 className="text-2xl text-primary text-center mb-6">Koordinator Regional & Program</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coordinators.map((coordinator, index) => (
                <MemberCard key={index} member={coordinator} size="small" />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <h2 className="text-2xl text-primary mb-4 text-center">Bergabung dengan Tim Kami</h2>
          <p className="text-center text-foreground/70 mb-6">
            Kami selalu mencari relawan yang bersemangat untuk membantu memimpin pendakian, mengorganisir acara, dan mendukung upaya konservasi kami. Jika Anda tertarik untuk mengambil peran kepemimpinan, silakan hubungi Koordinator Relawan kami.
          </p>
          <div className="text-center">
            <a
              href="mailto:relawan@himapala.org"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Hubungi Koordinator Relawan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
