import { Users, QrCode, Calendar, MapPin } from "lucide-react";
import { Card } from "./ui/card";

interface Member {
  id: number;
  name: string;
  angkatan: string;
  status: string;
  region?: string;
}

export function KeanggotaanPage() {
  const members: Member[] = [
    { id: 1, name: "Ahmad Rizki Maulana", angkatan: "2021", status: "Aktif", region: "Jakarta" },
    { id: 2, name: "Siti Nurhaliza Putri", angkatan: "2021", status: "Aktif", region: "Bandung" },
    { id: 3, name: "Budi Santoso", angkatan: "2020", status: "Aktif", region: "Jakarta" },
    { id: 4, name: "Dewi Lestari", angkatan: "2022", status: "Aktif", region: "Yogyakarta" },
    { id: 5, name: "Eko Prasetyo", angkatan: "2021", status: "Aktif", region: "Surabaya" },
    { id: 6, name: "Fitri Handayani", angkatan: "2020", status: "Aktif", region: "Jakarta" },
    { id: 7, name: "Galih Pratama", angkaton: "2022", status: "Aktif", region: "Bandung" },
    { id: 8, name: "Hana Nurjannah", angkatan: "2021", status: "Aktif", region: "Semarang" },
    { id: 9, name: "Irfan Hakim", angkatan: "2020", status: "Alumni", region: "Jakarta" },
    { id: 10, name: "Julia Rahmawati", angkatan: "2022", status: "Aktif", region: "Bogor" },
    { id: 11, name: "Khairul Anwar", angkatan: "2021", status: "Aktif", region: "Depok" },
    { id: 12, name: "Laila Sari", angkatan: "2022", status: "Aktif", region: "Tangerang" },
    { id: 13, name: "Muhammad Fadli", angkatan: "2020", status: "Alumni", region: "Jakarta" },
    { id: 14, name: "Nur Azizah", angkatan: "2021", status: "Aktif", region: "Bekasi" },
    { id: 15, name: "Omar Abdullah", angkatan: "2022", status: "Aktif", region: "Jakarta" },
    { id: 16, name: "Putri Ayu Lestari", angkatan: "2021", status: "Aktif", region: "Bandung" },
    { id: 17, name: "Qori Santika", angkatan: "2020", status: "Aktif", region: "Surabaya" },
    { id: 18, name: "Rudi Hermawan", angkatan: "2022", status: "Aktif", region: "Yogyakarta" },
    { id: 19, name: "Sari Wulandari", angkatan: "2021", status: "Aktif", region: "Jakarta" },
    { id: 20, name: "Tono Wijaya", angkatan: "2020", status: "Alumni", region: "Malang" },
  ];

  const activeMembers = members.filter(m => m.status === "Aktif").length;
  const alumniMembers = members.filter(m => m.status === "Alumni").length;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-primary mb-6">Keanggotaan</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bergabunglah dengan keluarga besar UKM HIMAPALA dan jadilah bagian dari petualangan luar biasa
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl text-primary mb-2">{activeMembers}</div>
            <p className="text-muted-foreground">Anggota Aktif</p>
          </Card>

          <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl text-primary mb-2">{alumniMembers}</div>
            <p className="text-muted-foreground">Alumni</p>
          </Card>

          <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl text-primary mb-2">8+</div>
            <p className="text-muted-foreground">Wilayah</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Members List */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-primary/20 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
                <h2 className="text-3xl">Daftar Anggota</h2>
                <p className="text-white/80 mt-2">Total {members.length} anggota terdaftar</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/30">
                    <tr>
                      <th className="px-6 py-4 text-left text-primary">No</th>
                      <th className="px-6 py-4 text-left text-primary">Nama</th>
                      <th className="px-6 py-4 text-left text-primary">Angkatan</th>
                      <th className="px-6 py-4 text-left text-primary">Wilayah</th>
                      <th className="px-6 py-4 text-left text-primary">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {members.map((member, index) => (
                      <tr key={member.id} className="hover:bg-secondary/10 transition-colors">
                        <td className="px-6 py-4 text-foreground/80">{index + 1}</td>
                        <td className="px-6 py-4">{member.name}</td>
                        <td className="px-6 py-4 text-foreground/80">{member.angkatan}</td>
                        <td className="px-6 py-4 text-foreground/80">{member.region}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            member.status === "Aktif" 
                              ? "bg-primary/10 text-primary" 
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {member.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Registration QR Code */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
                <div className="text-center mb-6">
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <QrCode className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-primary mb-2">Daftar Sekarang</h3>
                  <p className="text-muted-foreground">
                    Scan QR Code untuk mengisi formulir pendaftaran
                  </p>
                </div>

                {/* QR Code Image - Using placeholder for now */}
                <div className="bg-white p-6 rounded-xl mb-6 shadow-inner">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://forms.gle/example-registration-form"
                    alt="QR Code Pendaftaran"
                    className="w-full h-auto"
                  />
                </div>

                <div className="space-y-4 text-sm text-foreground/70">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary">1</span>
                    </div>
                    <p>Scan QR Code menggunakan kamera smartphone Anda</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary">2</span>
                    </div>
                    <p>Isi formulir pendaftaran dengan lengkap dan benar</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary">3</span>
                    </div>
                    <p>Tunggu konfirmasi dari tim kami melalui email</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                  <p className="text-sm text-foreground/70 text-center">
                    Atau kunjungi langsung:<br />
                    <a href="https://forms.gle/example" className="text-primary hover:underline">
                      forms.gle/himapala-daftar
                    </a>
                  </p>
                </div>
              </Card>

              {/* Additional Info */}
              <Card className="mt-6 p-6 bg-card border-primary/20">
                <h4 className="text-primary mb-3">Syarat Pendaftaran</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mahasiswa aktif universitas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Memiliki minat terhadap kegiatan alam terbuka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sehat jasmani dan rohani</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Bersedia mengikuti pelatihan dasar</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
