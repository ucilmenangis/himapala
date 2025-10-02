import { Mountain, Users, Compass, BookOpen, HeartHandshake, Camera, Shield, TreePine } from "lucide-react";
import { Card } from "./ui/card";

export function LayananPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Diklatsar (Pendidikan Dasar)",
      description: "Pelatihan dasar wajib bagi calon anggota yang mencakup pengenalan organisasi dan keterampilan dasar pencinta alam.",
      features: [
        "Materi organisasi dan kepencintaalaman",
        "Teknik dasar survival dan navigasi",
        "Pengenalan peralatan hiking",
        "Ujian teori dan praktik lapangan"
      ]
    },
    {
      icon: Mountain,
      title: "Open Trip & Pendakian Bersama",
      description: "Kegiatan pendakian rutin ke berbagai gunung di Jawa Timur yang terbuka untuk anggota.",
      features: [
        "Pendakian bulanan ke berbagai destinasi",
        "Berbagi biaya transportasi dan logistik",
        "Dipimpin koordinator berpengalaman",
        "Dokumentasi kegiatan lengkap"
      ]
    },
    {
      icon: TreePine,
      title: "Kegiatan Konservasi",
      description: "Aksi peduli lingkungan melalui clean up, penanaman pohon, dan edukasi masyarakat.",
      features: [
        "Clean up gunung dan pantai",
        "Penanaman pohon di area kritis",
        "Sosialisasi cinta lingkungan",
        "Kolaborasi dengan komunitas lokal"
      ]
    },
    {
      icon: Compass,
      title: "Pelatihan Navigasi Darat",
      description: "Workshop dan pelatihan penggunaan peta, kompas, dan GPS untuk orientasi di alam bebas.",
      features: [
        "Membaca peta topografi",
        "Teknik penggunaan kompas",
        "Navigasi dengan GPS",
        "Praktik orienteering"
      ]
    },
    {
      icon: Shield,
      title: "Pelatihan P3K & SAR Dasar",
      description: "Pelatihan pertolongan pertama dan pengenalan dasar Search and Rescue untuk keadaan darurat.",
      features: [
        "Penanganan cedera ringan-sedang",
        "Evakuasi korban sederhana",
        "Teknik komunikasi darurat",
        "Simulasi penyelamatan"
      ]
    },
    {
      icon: Users,
      title: "Gathering & Kebersamaan",
      description: "Acara kebersamaan untuk mempererat hubungan antar anggota melalui berbagai kegiatan santai.",
      features: [
        "Camping dan api unggun",
        "Olahraga bersama",
        "Diskusi dan sharing session",
        "Perayaan hari besar"
      ]
    },
    {
      icon: Camera,
      title: "Workshop Fotografi Alam",
      description: "Belajar teknik fotografi dan videografi untuk mendokumentasikan keindahan alam saat kegiatan.",
      features: [
        "Teknik komposisi landscape",
        "Pengaturan kamera di alam",
        "Editing foto dasar",
        "Praktik foto di lapangan"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Peminjaman Perlengkapan",
      description: "Layanan peminjaman peralatan hiking dan camping untuk anggota dengan harga terjangkau.",
      features: [
        "Carrier, tenda, sleeping bag",
        "Kompor, nesting, peralatan masak",
        "Headlamp dan perlengkapan lain",
        "Harga khusus untuk anggota"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-primary mb-6">Program & Kegiatan</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Berbagai program dan kegiatan yang kami tawarkan untuk mengembangkan kemampuan dan karakter mahasiswa pecinta alam
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1623622863859-2931a6c3bc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHRyYWlsfGVufDF8fHx8MTc1OTMyODYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Layanan HIMAPALA"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="bg-primary rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/60">
                        <span className="text-primary mt-1.5 flex-shrink-0">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl text-primary mb-8 text-center">Manfaat Bergabung</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl text-primary mb-3">Relasi & Networking</h3>
              <p className="text-foreground/70">
                Bertemu dan membangun relasi dengan mahasiswa dari berbagai jurusan yang memiliki minat sama
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl text-primary mb-3">Pengembangan Diri</h3>
              <p className="text-foreground/70">
                Melatih leadership, teamwork, problem solving, dan mental yang tangguh melalui kegiatan alam
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl text-primary mb-3">Pengalaman Berharga</h3>
              <p className="text-foreground/70">
                Menciptakan kenangan tak terlupakan sambil menjelajahi keindahan alam Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary text-white rounded-2xl p-12">
          <h2 className="text-3xl mb-4">Tertarik Bergabung?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari UKM HIMAPALA Politeknik Negeri Jember dan kembangkan potensi diri melalui kegiatan pencinta alam
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/keanggotaan"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors inline-block"
            >
              Daftar Sekarang
            </a>
            <a
              href="/kontak"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-block"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
