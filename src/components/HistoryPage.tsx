import { Calendar } from "lucide-react";
import { Card } from "./ui/card";

export function HistoryPage() {
  const milestones = [
    {
      year: "1985",
      title: "Pendirian",
      description: "UKM HIMAPALA didirikan oleh sekelompok 12 pendaki yang bersemangat yang ingin menciptakan komunitas yang berfokus pada eksplorasi pegunungan lokal.",
      image: "https://images.unsplash.com/photo-1511714975599-bf72be56a08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBiYWNrcGFjayUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTk0MTMxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      year: "1992",
      title: "Pendakian Puncak Tahunan Pertama",
      description: "Mengorganisir ekspedisi pendakian puncak gunung tahunan pertama kami, yang sejak itu menjadi tradisi yang dicintai yang menyatukan anggota dari seluruh wilayah.",
      image: "https://images.unsplash.com/photo-1676831140178-4f8f5118e254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU5NDEzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      year: "2001",
      title: "Upaya Konservasi Dimulai",
      description: "Meluncurkan program konservasi jalur kami, bermitra dengan taman nasional untuk memelihara dan melindungi jalur pendakian untuk generasi mendatang.",
      image: "https://images.unsplash.com/photo-1759174700940-4357104f0a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMHNjZW5pY3xlbnwxfHx8fDE3NTk0MTQ1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      year: "2010",
      title: "Pencapaian 1000 Anggota",
      description: "Mencapai 1000 anggota aktif, memperluas jangkauan dan dampak kami di berbagai provinsi dan mendirikan cabang regional.",
      image: "https://images.unsplash.com/photo-1653942862772-8c586a3481bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMHZpZXd8ZW58MXx8fHwxNzU5MzQwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      year: "2018",
      title: "Peluncuran Program Pemuda",
      description: "Memperkenalkan program pendakian pemuda kami untuk menginspirasi generasi berikutnya dari penggemar alam terbuka dan pengelola lingkungan.",
      image: "https://images.unsplash.com/photo-1590252497717-dc039b62f57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBpbmUlMjBtZWFkb3clMjBmbG93ZXJzfGVufDF8fHx8MTc1OTM1OTc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      year: "2025",
      title: "Ulang Tahun ke-40",
      description: "Merayakan empat dekade petualangan, komunitas, dan konservasi. Menantikan banyak tahun lagi untuk menjelajahi jalur bersama.",
      image: "https://images.unsplash.com/photo-1699388714018-f3d00ac8eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBzdW5zZXQlMjBtb3VudGFpbnxlbnwxfHx8fDE3NTk0MTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl text-primary mb-6">Sejarah Kami</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empat dekade petualangan, pertumbuhan, dan dedikasi untuk alam terbuka
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < milestones.length - 1 && (
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
          <h2 className="text-3xl text-primary mb-6">Warisan Kami</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
            Dari awal yang sederhana hingga menjadi komunitas pecinta alam yang berkembang, UKM HIMAPALA tetap berkomitmen pada nilai-nilai inti kami. Kami telah membantu ribuan orang menemukan kekuatan transformatif alam, melindungi banyak jalur, dan membangun persahabatan seumur hidup di sepanjang jalan.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl text-primary mb-2">2,500+</div>
              <p className="text-muted-foreground">Anggota Aktif</p>
            </div>
            <div>
              <div className="text-4xl text-primary mb-2">450+</div>
              <p className="text-muted-foreground">Jalur Dikelola</p>
            </div>
            <div>
              <div className="text-4xl text-primary mb-2">5,000+</div>
              <p className="text-muted-foreground">Pendakian Terorganisir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
