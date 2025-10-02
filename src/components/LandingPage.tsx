import { ArrowRight, Mountain, Users, MapPin, Heart, Target, Award, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface OrgMember {
  name: string;
  role: string;
  email?: string;
}

export function LandingPage() {
  // Organization Data
  const president: OrgMember = {
    name: "Ahmad Rizki",
    role: "Ketua",
    email: "ahmad.rizki@students.polije.ac.id"
  };

  const vicePresidents: OrgMember[] = [
    {
      name: "Siti Aminah",
      role: "Wakil Ketua I",
      email: "siti.aminah@students.polije.ac.id"
    },
    {
      name: "Fahrul Razi",
      role: "Wakil Ketua II",
      email: "fahrul.razi@students.polije.ac.id"
    }
  ];

  const directors: OrgMember[] = [
    {
      name: "Dewi Lestari",
      role: "Sekretaris",
      email: "dewi.lestari@students.polije.ac.id"
    },
    {
      name: "Bagus Prasetyo",
      role: "Bendahara",
      email: "bagus.prasetyo@students.polije.ac.id"
    },
    {
      name: "Rina Wulandari",
      role: "Koordinator Acara",
      email: "rina.wulandari@students.polije.ac.id"
    },
    {
      name: "Dimas Aditya",
      role: "Koordinator Pelatihan",
      email: "dimas.aditya@students.polije.ac.id"
    }
  ];

  const coordinators: OrgMember[] = [
    { name: "Yoga Pratama", role: "Sie. Perlengkapan" },
    { name: "Maya Sari", role: "Sie. Konsumsi" },
    { name: "Eko Saputra", role: "Sie. Dokumentasi" },
    { name: "Fitri Handayani", role: "Sie. Humas" },
    { name: "Rudi Hermawan", role: "Sie. Keamanan" },
    { name: "Citra Ayu", role: "Sie. Medis" }
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

  const scrollToProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const profileSection = document.getElementById('profil-section');
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1623622863859-2931a6c3bc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHRyYWlsfGVufDF8fHx8MTc1OTMyODYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-2xl">
            <Mountain className="h-20 w-20 text-white mx-auto mb-6" />
            <h1 className="text-6xl text-white mb-6">UKM HIMAPALA</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Unit Kegiatan Mahasiswa Pencinta Alam Politeknik Negeri Jember. Belajar, Bertualang, dan Berkembang Bersama di Alam Terbuka.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={scrollToProfile}
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/galeri">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Lihat Galeri
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/20 hover:shadow-lg transition-shadow">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mountain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3">Kegiatan Rutin</h3>
            <p className="text-muted-foreground">
              Pendakian, hiking, dan eksplorasi alam setiap bulan ke berbagai gunung dan destinasi alam di Jawa Timur.
            </p>
          </Card>

          <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/20 hover:shadow-lg transition-shadow">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3">Pelatihan & Workshop</h3>
            <p className="text-muted-foreground">
              Diklatsar, pelatihan survival, navigasi darat, climbing, dan berbagai workshop untuk mengembangkan kemampuan anggota.
            </p>
          </Card>

          <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/20 hover:shadow-lg transition-shadow">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3">Peduli Lingkungan</h3>
            <p className="text-muted-foreground">
              Ikut serta dalam kegiatan konservasi lingkungan dan edukasi masyarakat tentang pentingnya menjaga kelestarian alam.
            </p>
          </Card>
        </div>
      </div>

      {/* Profile Section */}
      <div id="profil-section" className="bg-gradient-to-b from-background to-secondary/20 pt-20 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl text-primary mb-6">Profil UKM HIMAPALA</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wadah bagi mahasiswa Politeknik Negeri Jember yang ingin belajar dan mengembangkan diri melalui kegiatan pecinta alam.
            </p>
          </div>

          {/* Image Section */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1726091983472-a7da2540c492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBncm91cCUyMG5hdHVyZXxlbnwxfHx8fDE3NTk0MTQ1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Grup Pendakian"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-primary">Visi</h3>
              <p className="text-foreground/80">
                Menjadi wadah pengembangan karakter dan keterampilan mahasiswa melalui kegiatan kepencintaalaman yang berkarakter, berprestasi, dan peduli lingkungan.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-primary">Misi</h3>
              <p className="text-foreground/80">
                Menyelenggarakan pelatihan dan kegiatan pencinta alam, membangun jiwa kepemimpinan dan kerjasama, serta turut serta dalam upaya pelestarian lingkungan.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-primary">Nilai-Nilai</h3>
              <p className="text-foreground/80">
                Kebersamaan, disiplin, tanggung jawab, peduli lingkungan, dan semangat petualangan. Kami percaya pada prinsip Leave No Trace dalam setiap kegiatan.
              </p>
            </Card>
          </div>

          {/* History Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-primary mb-6">Sejarah Singkat</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Perjalanan UKM HIMAPALA Politeknik Negeri Jember dari masa ke masa
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto">
              {[
                {
                  year: "2010",
                  title: "Pendirian UKM",
                  description: "UKM HIMAPALA Politeknik Negeri Jember didirikan oleh sekelompok mahasiswa pecinta alam yang ingin mengembangkan kegiatan kepencintaalaman di kampus.",
                  image: "https://images.unsplash.com/photo-1511714975599-bf72be56a08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBiYWNrcGFjayUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTk0MTMxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                },
                {
                  year: "2015",
                  title: "Ekspedisi Gunung Semeru",
                  description: "Menyelenggarakan ekspedisi pertama ke puncak Gunung Semeru, menandai dimulainya tradisi pendakian gunung tinggi untuk anggota UKM.",
                  image: "https://images.unsplash.com/photo-1676831140178-4f8f5118e254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU5NDEzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                },
                {
                  year: "2018",
                  title: "Program Konservasi",
                  description: "Memulai kegiatan rutin konservasi lingkungan dan clean up di berbagai destinasi wisata alam di sekitar Jember dan Jawa Timur.",
                  image: "https://images.unsplash.com/photo-1759174700940-4357104f0a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMHNjZW5pY3xlbnwxfHx8fDE3NTk0MTQ1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                },
                {
                  year: "2020",
                  title: "Diklatsar Online",
                  description: "Adaptasi kegiatan di masa pandemi dengan menyelenggarakan Diklatsar (Pendidikan Dasar) secara online untuk tetap menjaga regenerasi anggota.",
                  image: "https://images.unsplash.com/photo-1653942862772-8c586a3481bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMHZpZXd8ZW58MXx8fHwxNzU5MzQwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                },
                {
                  year: "2023",
                  title: "Pelatihan Climbing",
                  description: "Membuka divisi climbing dan menyelenggarakan pelatihan panjat tebing untuk memperluas keterampilan anggota di bidang vertical rescue.",
                  image: "https://images.unsplash.com/photo-1590252497717-dc039b62f57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBpbmUlMjBtZWFkb3clMjBmbG93ZXJzfGVufDF8fHx8MTc1OTM1OTc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                },
                {
                  year: "2025",
                  title: "15 Tahun Berkarya",
                  description: "Merayakan 15 tahun UKM HIMAPALA dengan berbagai kegiatan dan prestasi. Terus berkomitmen membina mahasiswa pecinta alam.",
                  image: "https://images.unsplash.com/photo-1699388714018-f3d00ac8eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBzdW5zZXQlMjBtb3VudGFpbnxlbnwxfHx8fDE3NTk0MTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                }
              ].map((milestone, index, arr) => (
                <div key={milestone.year} className="relative mb-12 last:mb-0">
                  {/* Timeline line */}
                  {index < arr.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-1 bg-primary/20 hidden md:block" />
                  )}
                  
                  <Card className="overflow-hidden bg-card/80 backdrop-blur border-primary/20 hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-[300px,1fr] gap-0">
                      <div className="h-48 md:h-full">
                        <img 
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center z-10 relative">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div className="text-3xl text-primary">{milestone.year}</div>
                        </div>
                        <h3 className="mb-3 text-primary">{milestone.title}</h3>
                        <p className="text-foreground/70">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Legacy Section */}
            <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl text-primary mb-6">Prestasi & Pencapaian</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
                Selama lebih dari 15 tahun, UKM HIMAPALA Polije telah menjadi wadah bagi ratusan mahasiswa untuk belajar, bertualang, dan mengembangkan karakter melalui kegiatan pencinta alam.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Anggota Aktif</p>
                </div>
                <div>
                  <div className="text-4xl text-primary mb-2">25+</div>
                  <p className="text-muted-foreground">Gunung Didaki</p>
                </div>
                <div>
                  <div className="text-4xl text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Kegiatan per Tahun</p>
                </div>
              </div>
            </div>
          </div>

          {/* Organization Chart Section */}
          <div className="bg-gradient-to-b from-background to-secondary/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-primary mb-6">Struktur Organisasi</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kepengurusan UKM HIMAPALA Politeknik Negeri Jember Periode 2024/2025
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
                <h3 className="text-2xl text-primary text-center mb-6">Pengurus Inti</h3>
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
                <h3 className="text-2xl text-primary text-center mb-6">Koordinator Seksi</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coordinators.map((coordinator, index) => (
                    <MemberCard key={index} member={coordinator} size="small" />
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl text-primary mb-4 text-center">Tertarik Bergabung?</h3>
              <p className="text-center text-foreground/70 mb-6">
                Kami terbuka untuk mahasiswa Politeknik Negeri Jember yang ingin belajar dan berkembang melalui kegiatan pencinta alam. Hubungi kami untuk informasi lebih lanjut!
              </p>
              <div className="text-center">
                <a
                  href="mailto:himapala@polije.ac.id"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>

          {/* SOP Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-primary mb-6">Standard Operating Procedure (SOP)</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Prosedur standar operasional untuk menjaga keselamatan dan kualitas kegiatan UKM HIMAPALA
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* SOP Pendakian */}
              <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">01</span>
                  </div>
                  <h3 className="text-2xl text-primary">SOP Kegiatan Pendakian</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Persiapan Sebelum Pendakian</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Briefing tim minimal 3 hari sebelum keberangkatan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pemeriksaan kelengkapan peralatan pribadi dan kelompok</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pengecekan kondisi kesehatan seluruh peserta</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Koordinasi dengan pihak taman nasional/pengelola jalur</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Selama Pendakian</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Mengikuti jalur yang telah ditentukan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Melakukan komunikasi berkala dengan koordinator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Menerapkan prinsip Leave No Trace</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Istirahat sesuai jadwal yang telah disepakati</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Pasca Pendakian</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Evaluasi kegiatan dan dokumentasi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pengembalian dan pemeriksaan peralatan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Laporan kegiatan kepada pembina</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* SOP Keselamatan */}
              <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">02</span>
                  </div>
                  <h3 className="text-2xl text-primary">SOP Keselamatan & Darurat</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Pencegahan</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Setiap tim wajib membawa P3K lengkap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Minimal 2 orang dalam tim memiliki sertifikat pertolongan pertama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Komunikasi radio/HT dalam kondisi baik</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Membawa peta, kompas, dan GPS</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Penanganan Kecelakaan</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Segera hubungi koordinator dan tim SAR terdekat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Berikan pertolongan pertama pada korban</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Catat posisi koordinat dan kondisi korban</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Jangan memindahkan korban kecuali dalam kondisi darurat</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Evakuasi</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Koordinasi dengan tim SAR untuk evakuasi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Dokumentasi kejadian untuk laporan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Informasi keluarga korban sesegera mungkin</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* SOP Organisasi */}
              <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">03</span>
                  </div>
                  <h3 className="text-2xl text-primary">SOP Administrasi Organisasi</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Keanggotaan</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pendaftaran melalui formulir resmi online/offline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Mengikuti pelatihan dasar pendakian (Diklatsar)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Membayar iuran keanggotaan sesuai ketentuan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Menerima kartu anggota setelah lulus Diklatsar</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Rapat dan Keputusan</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Rapat pengurus minimal 1 kali per bulan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Rapat anggota minimal 1 kali per semester</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Keputusan diambil secara musyawarah mufakat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Notulensi rapat didokumentasikan dengan baik</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Keuangan</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Laporan keuangan transparan setiap bulan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pengajuan dana kegiatan minimal 2 minggu sebelumnya</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pertanggungjawaban keuangan maksimal 1 minggu setelah kegiatan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* SOP Peralatan */}
              <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">04</span>
                  </div>
                  <h3 className="text-2xl text-primary">SOP Pengelolaan Peralatan</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Peminjaman</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Mengisi formulir peminjaman minimal 3 hari sebelumnya</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Menyerahkan jaminan (KTM/KTP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pengecekan kondisi peralatan saat pengambilan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Membayar biaya sewa sesuai ketentuan</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Perawatan</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Membersihkan peralatan setelah digunakan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pengecekan rutin kondisi peralatan setiap bulan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Perbaikan/penggantian peralatan rusak segera</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Penyimpanan di tempat yang kering dan terhindar dari hama</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="text-primary mb-2">Pengembalian</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Dikembalikan dalam kondisi bersih dan kering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pengecekan kelengkapan dan kondisi peralatan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Denda untuk keterlambatan atau kerusakan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Download SOP */}
            <div className="mt-12 text-center bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl text-primary mb-4">Dokumen SOP Lengkap</h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Untuk informasi lebih detail dan lengkap, silakan unduh dokumen SOP resmi UKM HIMAPALA dalam format PDF
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download SOP Lengkap (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
